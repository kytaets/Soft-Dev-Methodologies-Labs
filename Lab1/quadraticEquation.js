import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(parseFloat(answer)));
  });
};

async function main() {
  const a = await askQuestion('Введіть a: ');
  const b = await askQuestion('Введіть b: ');
  const c = await askQuestion('Введіть c: ');

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

  rl.close();
}

main();
