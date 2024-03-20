let givenString="abcgag"
let str=givenString.toUpperCase()
let N=str.length
let countg=0
console.log(str)
function specialseq(str,N){

    let countg=0
    let result=0
    for(let i=N-1;i>=0;i--){
        if(str[i]=="G")
            countg+=1
        if(str[i]=="A")
            result=result+countg
    }
    return result
}
console.log(specialseq(str,N))






/*Special Subsequences "AG"


Problem Description
You have given a string A having Uppercase English letters.

You have to find how many times subsequence "AG" is there in the given string.

NOTE: Return the answer modulo 109 + 7 as the answer can be very large.



Problem Constraints
1 <= length(A) <= 10^5



Input Format
First and only argument is a string A.



Output Format
Return an integer denoting the answer.



Example Input
Input 1:

 A = "ABCGAG"
Input 2:

 A = "GAB"


Example Output
Output 1:

 3
Output 2:

 0


Example Explanation
Explanation 1:

 Subsequence "AG" is 3 times in given string 
Explanation 2:

 There is no subsequence "AG" in the given string.
 */ 