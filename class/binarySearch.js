function BinarySearch(arr,element){
    let start=0,end=arr.length-1
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==element)
            return true
        else if(arr[mid]<element)
            start=mid+1
        else
            end=mid-1

    }
    return false
}




function recSearch(arr,start,end,ele){
    if(start>end)
        return false
    let mid=Math.floor((start+end)/2)
    if(arr[mid]==ele)
        return true
    if(arr[mid]>ele)
        return (recSearch(arr,start,mid-1,ele))
    else
        return (recSearch(arr,mid+1,end,ele))
}
let arr=[1,2,3,4,5,6,7,8,9]
let x=5
let start=0
let end=arr.length-1
if(BinarySearch(arr,x)){
    console.log("element Found")
}
else{
    console.log("Element Not found")
}
if(recSearch(arr,start,end,x)){
    console.log("Element Found")
}
else{
    console.log("Element not Found")
}
