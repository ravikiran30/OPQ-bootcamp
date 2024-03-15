/*Declare an array and sum of all values in an array using loops - for, while  — Use functions*/

let array=[2,3,4,5,6,7,1];
function using_for(array){
    sum=0;
    for (let i=0; i<array.length;i++){
        sum=sum+array[i];
    }
    console.log(sum);
}


function using_while(array){

    let i=0;
    let sum=0;
    while( i<array.length){
        sum=sum+array[i];
        i++
    }
    console.log(sum);
}

using_for(array)
using_while(array)

