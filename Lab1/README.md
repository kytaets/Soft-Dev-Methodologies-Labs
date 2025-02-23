# Soft-Dev-Methodologies-Labs

## Lab № 1 "Quadratic Equation Solver"

## Description

This application solves quadratic equations of the form: ax^2 + bx + c = 0

It supports two modes:

- **Interactive** — the user inputs coefficients via the terminal
- **Non-interactive** — coefficients are provided through a text file

## Build and Run Instructions

### Requirements

- Installed [Node.js](https://nodejs.org/) (version 16 or newer)

### Running in Interactive Mode

To run in interactive mode, type in the cmd or IDE terminal:
```bash
node quadraticEquation.js
```
The application will prompt you to enter the coefficients a, b, and c.

### File Format for Non-Interactive Mode
Create a text file containing three numbers (a, b, c) separated by spaces and empty line after them:

For example:
```txt
2 1 -3
```

Any format violation will result in an error.
Invalid format examples:
```txt
2, 5, -3
a b c
2 5
```
### Running in Non-Interactive Mode
To run in non-interactive mode, type in the cmd or IDE terminal:
```bash
node quadraticEquation.js test.txt
```
test.txt - name of your file with numbers


### Revert Commit
[Reference to the last revert commit](https://github.com/kytaets/Soft-Dev-Methodologies-Labs/commit/dd432a1bec0d790ba4f9760fb552fb5ef0c6c0da)


