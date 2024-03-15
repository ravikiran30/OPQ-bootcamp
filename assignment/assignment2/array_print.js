/*Declare an array and print all values in an array using loops - for, while — Use functions*/



let array=[2,3,4,5,6,7];

function using_for(array){
    for (let i=0; i<array.length;i++){
        console.log(array[i]);
    }
}

function using_while(array){
    let i=0;
    while( i<array.length){
        console.log(array[i])
        i++
    }
}

using_for(array)
using_while(array)
