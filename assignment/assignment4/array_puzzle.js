/*Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

constraints:

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5

eg:

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:
3
Output 2:

-1

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