const crypto = require('crypto');
const { performance } = require('perf_hooks');


const start = performance.now(); // Start measuring time

for (let i=0; i<3 ; i++){
    crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
     
        const end = performance.now(); // End measuring time
        const hashTime = end - start; // Calculate the time difference
        console.log(`Time taken: ${hashTime.toFixed(3)} milliseconds`);
    });
}


