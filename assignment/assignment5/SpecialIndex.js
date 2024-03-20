function specialIndex(arr,N){
    let count=0
    for(let i=0;i<N;i++){
        let oddSum=0
        let evenSum=0
        
        let ele=arr[i]
        arr.splice(i,1)
    
        for(let j=0;j<arr.length;j++){
            if(j%2==0)
                evenSum+=arr[j]
            else
                oddSum+=arr[j]

        }
        if(evenSum==oddSum){
            count++
            //console.log(i)    TO GET INDEX
            //console.log(ele)  TO GET ELEMENT PRESENT IN THAT INDEX
        }
        arr.splice(i,0,ele)
    }
    return count
}
let arr=[2,1,6,4]
let N=arr.length
console.log(specialIndex(arr,N))


//input=[2,2,6,6,2]         output=3
//input=[2,1,6,4]           output=1
//input=[1,1,1]             output=3


/*Q2. Special Index

Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= n <= 10^5
-10^5 <= A[i] <= 10^5


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.
*/