function subarrayWithLeastAverage(arr,B) {
    let minSum = Infinity;
    let minIndex = -1;

    for (let i = 0; i <= arr.length - B; i++) {
        let subarraySum = 0;
        for (let j = i; j < i + B; j++) {
            subarraySum+= arr[j];
        }
        if (subarraySum < minSum) {
            minSum = subarraySum;
            minIndex = i;
        }
    }

    return minIndex;
}

let array = [3, 7, 90, 20, 10, 50, 40];
let B=3
console.log(subarrayWithLeastAverage(array,B))







// Problem Description
// Given an array of size N, find the subarray of size K with the least average.



// Problem Constraints
// 1<=k<=N<=10^5
// -10^5<=A[i]<=10^5


// Input Format
// First argument contains an array A of integers of size N.
// Second argument contains integer k.


// Output Format
// Return the index of the first element of the subarray of size k that has least average.
// Array indexing starts from 0.


// Example Input
// Input 1:
// A=[3, 7, 90, 20, 10, 50, 40]
// B=3
// Input 2:

// A=[3, 7, 5, 20, -10, 0, 12]
// B=2


// Example Output
// Output 1:
// 3
// Output 2:

// 4


// Example Explanation
// Explanation 1:
// Subarray between indexes 3 and 5
// The subarray {20, 10, 50} has the least average 
// among all subarrays of size 3.
// Explanation 2:

//  Subarray between [4, 5] has minimum average
