/*Create a calculator to perform  sum, subraction, multiplication and division of 2 integers provided by user*/
// program for a simple calculator

function cal(number1,number2,operator){
    let result;

// using if...else if... else
    if (operator == "+") {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }

// display the result
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
cal(5,2,'*')