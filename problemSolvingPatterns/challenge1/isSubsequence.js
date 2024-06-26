/*** Multiple Pointers - isSubsequence ***/

// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the first string form a subsequence of the characters in the second
// string. In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

// Examples:
// 1     isSubsequence('hello', 'by hecatl in lo world')
// 2     isSubsequence('sing', 'sting')
// 3     isSubsequence('abc', 'abracadabra')
// 4     isSubsequence('abc', 'acb')

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2){
    if (str2.length < str1.length) return false;
    let i = 0;
    let j = 0;
    while (j < str2.length){
        if (str2[j] === str1[i]){
            i++;
        }
        j++;
    }
    return i === str1.length;
}

console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('', 'cat')); // true