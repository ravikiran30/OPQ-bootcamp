const math=require("./math_cal");


const a = 8;
const b = 4;
const c = 2;
const d = 0;
console.log("Addition of two numbers is : " ,math.add(a,b));
console.log("Substraction of two numbers is : " ,math.substract(a,b));
console.log("Multiplication of two numbers is : " ,math.multipliy(a,b));
console.log("Division of two numbers is : " ,math.divison(a,b));
console.log("Divison with 0 is : " ,math.divison(a,d));

