/*Implement string reversal. dont use builtin function
*/

let given_string="abcdefghi"
let reversal_string=""
for (let i=given_string.length; i>=0; i--){
    reversal_string+=given_string[i];

}
console.log(reversal_string)