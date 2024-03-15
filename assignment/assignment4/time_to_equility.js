/*Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.


Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000


Input Format
First argument is an integer array A.


Output Format
Return an integer denoting the minimum time to make all elements equal.


Example Input
A = [2, 4, 1, 3, 2]


Example Output
8
*/

    
function time_to_equility(A){
    max=A[0]
    min_time=0
    //to find maximum value
    for (let i=1;i<A.length;i++){
        if(A[i]>max)
            max=A[i]
    }

    for (let j=0;j<A.length;j++){
        let B=max-A[j]
        min_time+=B
    }
    return min_time
}

let array1= [2, 4, 1, 3, 2]
console.log(time_to_equility(array1))           //output=8

let array2=[1,3,4,5,6]
console.log(time_to_equility(array2))           //output=11

