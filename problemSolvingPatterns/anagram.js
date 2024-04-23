/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase or name formed by rearranging
 * the letters of another, such as cinema formed from iceman.
 *
 * Assume everything is lowercased, single-words, no spaces, periods, punctuations or numbers.
 */

// function validAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;
//     let count_str1 = {};
//     let count_str2 = {};
//     for (let char of str1){
//         count_str1[char] = (count_str1[char] || 0) + 1;
//     };
//     for (let char of str2){
//         count_str2[char] = (count_str2[char] || 0) + 1;
//     };
//     for (let char in count_str1){
//         if (!(char in count_str2)) return false;
//         if (count_str1[char] !== count_str2[char]) return false;
//     }
//     return true;
// }

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let counter = {};
    for (let char of str1){
        counter[char] = (counter[char] || 0) + 1;
    };

    for (let char of str2){
        if (!counter[char]){
            return false;
        } else {
            counter[char]--;
        }
    }
    return true;
}

console.log(validAnagram("", "")); // True
console.log(validAnagram("rat", "art")); // True
console.log(validAnagram("anagram", "nagaram")); // True
console.log(validAnagram("aaz", "zza")) // False
console.log(validAnagram("listen", "silent")) // True
