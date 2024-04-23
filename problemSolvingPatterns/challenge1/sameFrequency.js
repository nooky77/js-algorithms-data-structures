// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

const sameFrequency = (num1, num2) => {
    let count = {};
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    for(let num of str1){
        count[num] = (count[num] || 0) + 1;
    }
    for(let num of str2){
        if(!count[num]){
            return false
        } else {
            count[num] -= 1;
        }
    }
    return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true