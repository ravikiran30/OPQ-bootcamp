const fs = require('node:fs');

console.log("File read start");

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("----------file read----------");
});

console.log("File read end");
