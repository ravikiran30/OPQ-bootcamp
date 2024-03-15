/*diamond shape

    *
   *** 
  *****
 *******
*********
 *******
  *****
   ***
    *                    */
let n = 5

for (let i = 0; i < n; i++) {
    let row = '';
        for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
    }
    
    for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
    }
    console.log(row);
}


for (let i = n-2; i >=0; i--) {
    let row = '';
        for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
    }
    
    for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
    }
    console.log(row);
}