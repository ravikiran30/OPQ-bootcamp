const crypto = require('crypto');
const { performance } = require('perf_hooks');

const start = performance.now(); // Start measuring time

// Synchronous PBKDF2 computation
crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");

const end = performance.now(); // End measuring time


const hashTime = end - start; // Calculate the time difference

// console.log(`Derived Key: ${derivedKey.toString('hex')}`);
console.log(`Time taken: ${hashTime.toFixed(3)} milliseconds`);

