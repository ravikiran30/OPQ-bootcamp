/*Problem Description
Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

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

function product_array(array) {
    const N = array.length;
    const left_side_product = new Array(N);
    const right_side_product = new Array(N);
    const product = new Array(N);

    //To find left products
    left_side_product[0] = 1;
    for (let i = 1; i < N; i++) {
        left_side_product[i] = left_side_product[i - 1] * array[i - 1];
    }

    // To find right products
    right_side_product[N-1] = 1;
    for (let i = N-2; i>= 0; i--) {
        right_side_product[i] = right_side_product[i + 1] * array[i + 1];
    }

    // To find product array
    for (let i = 0; i < N; i++) {
        product[i] = left_side_product[i] * right_side_product[i];
    }

    return product;
}

const array1 = [1, 2, 3, 4, 5];
console.log(product_array(array1));         //output==[120, 60, 40, 30, 24]


const array2=[2,3,4,5,9]
console.log(product_array(array2))          //output ==[540, 360, 270, 216, 120]