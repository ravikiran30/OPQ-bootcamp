function Leader(a)
{
    let b=[a[a.length-1]];
    let max=a[a.length-1];
    
    for(let i =a.length-2;i>=0;i--)
    {
        if(a[i]>max)
        {
            max=a[i];
            b.push(max);
           
        }
    }
    return b;
    
}

let arr1=[16, 17, 4, 3, 5, 2];
console.log("Leaders present in an array are: ",Leader(arr1));

let arr2=[5,4];
console.log("Leaders present in an array are: ",Leader(arr2));