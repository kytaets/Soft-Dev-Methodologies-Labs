import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      if (!/^-?\d*\.?\d+$/.test(answer)) {
        console.log(
          `Error. Expected a valid real number, got ${answer} instead`
        );
        resolve(askQuestion(query));
      } else {
        resolve(parseFloat(answer));
      }
    });
  });
};

const solveEquation = (a, b, c) => {
  if (a === 0) {
    console.log('Error. a cannot be 0');
    process.exit(1);
  }

  const discriminant = b ** 2 - 4 * a * c;
  const roots = [];

  if (discriminant > 0) {
    const x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    roots.push(x1, x2);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    roots.push(x);
  }

  const equationMessage =
    `Equation is: ` +
    `(${a.toFixed(1)}) x^2 + (${b.toFixed(1)}) x + (${c.toFixed(1)}) = 0`;
  const rootsMessage = `There are ${roots.length} roots`;

  console.log(equationMessage);
  console.log(rootsMessage);

  roots.forEach((root, index) => {
    console.log(`x${index + 1} = ${root.toFixed(2)}`);
  });
};

const main = async () => {
  if (process.argv.length === 3) {
    // File mode
    const filePath = process.argv[2];
    if (!fs.existsSync(filePath)) {
      console.log(`file ${filePath} does not exist`);
      process.exit(1);
    }

    try {
      const content = fs.readFileSync(filePath, 'utf-8').trim();
      const numbers = content.split(' ').map(Number);

      if (numbers.length !== 3 || numbers.some(isNaN)) {
        console.log('invalid file format');
        process.exit(1);
      }

      const [a, b, c] = numbers;
      solveEquation(a, b, c);
    } catch (error) {
      console.log('invalid file format');
      process.exit(1);
    }
    rl.close();
  } else {
    // Interactive mode
    const a = await askQuestion('a = ');
    const b = await askQuestion('b = ');
    const c = await askQuestion('c = ');
    rl.close();
    solveEquation(a, b, c);
  }
};

main();
