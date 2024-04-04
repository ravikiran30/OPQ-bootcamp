// function subsequence(arr,index,path){
//     if(index==arr.length){
//         if(path.length>0)
//             console.log(path)
//     }
//     else{
//         subsequence(arr,index+1,path)
//         path.push(arr[index])
//         subsequence(arr,index+1,path)
//         path.pop()
       
//     }
//     return 
// }
// let arr=[2,3,9]
// let path=[]
// subsequence(arr,0,path)
var letters = [2,3,9];
var combi = [];
var temp= "";
var letLen = Math.pow(2, letters.length);

for (var i = 0; i < letLen ; i++){
    temp= "";
    for (var j=0;j<letters.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += letters[j]
        }
    }
    if (temp !== "") {
        combi.push(temp);
    }
}

console.log(combi.join("\n"));