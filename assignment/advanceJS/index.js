let array=[1,2,3,4,5];

function calArea(radiusArray){
    let result =[]
    for (let i=0;i<radiusArray.length;i++){
        result.push(3.14*radiusArray[i]*radiusArray[i])


    }
    return result;
    
}
function calCircum(radiusArray){
    let result =[]
    for (let i=0;i<radiusArray.length;i++){
        result.push(2* 3.14*radiusArray[i])


    }
    return result;
    
}
function calDiameter(radiusArray){
    let result =[]
    for (let i=0;i<radiusArray.length;i++){
        result.push(2* radiusArray[i])


    }
    return result;
    
}

let resultArea=calArea(array)
console.log(resultArea)
let resultCircum=calCircum(array)
console.log(resultCircum)
let resultDiameter=calDiameter(array)
console.log(resultDiameter)