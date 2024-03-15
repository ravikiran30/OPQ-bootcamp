/*Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


Input Format

The only argument given is the integer array A.
Output Format

Return the product array.
Constraints

2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]

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

