function printSubarrays(array) {
    let sum=0
    for (let i = 0; i < array.length; i++) {
          for (let j = i; j < array.length; j++) {
                 let subarray = array.slice(i, j + 1);
                 for(k=0;k<subarray.length;k++){
                    sum+=subarray[k]
                 }

        console.log(subarray);
      }

    }
    console.log(sum)
  }

  let array = [1,2,3];
  printSubarrays(array);



// Problem Description
// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.

// Note : Be careful of integer overflow issues while calculations. Use appropriate datatypes.



// Problem Constraints
// 1 <= N <= 10^5
// 1 <= A[i] <= 10^4


// Input Format
// The first argument is the integer array A.


// Output Format
// Return a single integer denoting the sum of all subarray sums of the given array.


// Example Input
// Input 1:
// A = [1, 2, 3]
// Input 2:

// A = [2, 1, 3]


// Example Output
// Output 1:
// 20
// Output 2:

// 19


// Example Explanation
// Explanation 1:
// The different subarrays for the given array are: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3].
// Their sums are: 1 + 2 + 3 + 3 + 5 + 6 = 20
// Explanation 2:

// The different subarrays for the given array are: [2], [1], [3], [2, 1], [1, 3], [2, 1, 3].
// Their sums are: 2 + 1 + 3 + 3 + 4 + 6 = 19
