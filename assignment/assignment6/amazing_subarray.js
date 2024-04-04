let string1="abec"
string1.toLowerCase()
let arr=[]
for(var i=0;i<string1.length;i++){
    for(var j=i+1;j<=string1.length;j++){
        arr.push(string1.substring(i, j))
    }
}
console.log(arr)
let count=0
for(var k=0;k<arr.length;k++){
    if(arr[k].startsWith("a"))
        count++
    if(arr[k].startsWith("e"))
        count++
    if(arr[k].startsWith('i'))
        count++
    if(arr[k].startsWith('o'))
        count++
    if(arr[k].startsWith('u'))
        count++
}
console.log(arr)
console.log(count%10003)







/*Amazing Subarrays

You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input

Only argument given is string S.

Output

Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 10^6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.
    */