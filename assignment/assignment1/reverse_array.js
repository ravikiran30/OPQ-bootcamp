/*Implement array reversal. dont use builtin function
*/

let given_array=[1,3,4,5,6]
let reversal_array=[]
for (let i=given_array.length; i>=0; i--){
    reversal_array+=given_array[i];

}
console.log(reversal_array)