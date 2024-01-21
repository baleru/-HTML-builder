const fs = require('fs');
const readline = require('readline');

const filePath = '02-write-file/output.txt';
const stream = fs.createWriteStream(filePath, { flags: 'a' });

console.log('Welcome! Type your text below. Enter "exit" to end.');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('exiting');
    stream.end();
    process.exit();
  }

  stream.write(input + '\n');
  console.log('Text written to file. Type more or enter "exit" to end.');
});

process.on('SIGINT', () => {
  console.log('\nвсего доброго');
  stream.end();
  process.exit();
});