/*Create a calculator using function for each operartions -  
sum, subraction, multiplication and division of 2 integers provided by user*/

function addition(a,b){
    let addition = a+b;
    console.log(addition)
}
function subtraction(a,b){
    let subtraction = a-b;
    console.log(subtraction)
}
function multiplication(a,b){
    let multiplication = a*b;
    console.log(multiplication)
}
function division(a,b){
    if(a==0){
        console.log(0)
    }
    if(b==0){
        console.log("enter correct input")
    }

    let division = a/b;
    console.log(division)
}

addition(10,2)
subtraction(10,2)
multiplication(10,2)
division(10,2)
