//Generate * pattern to construct a pyramid
//    *
//   *** 
//  *****
// *******
//*********

let n=5;
let str="";
for (let i=1;i<=n; i++){
    for (let j=1;j<=n-i; j++){
        str=str+" ";

    }
    for (let k=0; k<2*i-1; k++){
        str=str+"*";
    }
    str=str+"\n";

}
console.log(str);