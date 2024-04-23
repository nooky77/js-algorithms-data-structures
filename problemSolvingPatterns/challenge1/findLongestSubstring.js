// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str){
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let count = {};
    while(end < str.length){
        let letter = str[end];
        if (!count[letter]){
            count[letter] = end;
            end++;
        } else if (count[letter]){
            maxLength = Math.max(maxLength, end - start);
            start = count[letter] + 1
            count[letter] = end;
            end++;
        } else {
            break;
        }
    }
    return maxLength;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6