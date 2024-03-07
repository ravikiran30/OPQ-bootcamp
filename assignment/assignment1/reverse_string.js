/*Implement string reversal. dont use builtin function
*/

let given="abcdefghi"
let out=""
for (let i=given.length; i>=0; i--){
    out+=given[i];

}
console.log(out)