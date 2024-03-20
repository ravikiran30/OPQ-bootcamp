let arr=[2, 6, 1, 6, 9]
let N=arr.length
let min=arr[0]
let max=arr[0]
for(let i=0;i<N;i++){
    if(min>arr[i])
        min=arr[i]
    if(max<arr[i])
        max=arr[i]
}
console.log(min)
console.log(max)

let min_Index
let max_Index
let smallest_len 
for(let j=0;j<N;j++){
    if(min==arr[j])
        min_Index=j
    if(max==arr[j])
        max_Index=j
    smallest_len=Math.abs(max_Index-min_Index)+1
}
console.log(smallest_len)


/*Closest MinMax


Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array.
 */