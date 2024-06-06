const fs = require('node:fs');

console.log("File read start");

try {
  const data = fs.readFileSync('./test.txt', 'utf8');
  console.log("----------file read----------");
} catch (err) {
  console.error(err);
}

console.log("File read end");
console.log("File read end");
console.log("File read end");

console.log("File read end");
console.log("File read end");
