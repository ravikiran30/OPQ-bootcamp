/*Problem Description
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



Problem Constraints
1 <= N, M <= 10^5
1 <= A[i] <= 10^9
0 <= L <= R < N


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.


Output Format
Return an integer array of length M where ith element is the answer for ith query in B.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
Input 2:

A = [2, 2, 2]
B = [[0, 0], [1, 2]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4]

*/

let given_array = [1, 2, 3, 4, 5]
let given_range = [[0, 3], [1, 2]]

function range_sum(A,B){
    // calculate cummulative array
    let cum_arr=[]
    cum_arr.push(A[0])
    for (let i=1;i<A.length;i++){
        cum_arr.push(cum_arr[i-1]+A[i])
    }
    //Calculate sum of each range L to R
    let sum_arr=[]
    for (let j=0;j<B.length;j++){
        let L=B[j][0]
        let R=B[j][1]
        if(L==0){
            sum_arr.push(cum_arr[R])
        }
        else{
            sum_arr.push(cum_arr[R]-cum_arr[L-1])
        }    
    }
    return sum_arr
}
console.log(range_sum(given_array,given_range))