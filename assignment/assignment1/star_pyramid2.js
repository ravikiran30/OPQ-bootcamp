//Upside down pyramid
//*********
// *******
//  *****
//   ***
//    *
let n=5;
let str="";
for (let i=0;i<n; i++){
    for (let j=0;j<i; j++){
        str=str+" ";

    }
    for (let k=0; k<2*(n-i)-1; k++){
        str=str+"*";
    }
    str=str+"\n";

}
console.log(str);