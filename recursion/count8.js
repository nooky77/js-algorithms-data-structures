// Given a non-negative int n, compute recursively (no loops) the count of the
//  occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double,
//  so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/)
//  by 10 removes the rightmost digit (126 / 10 is 12).

function count8(num){
    if (num < 8) return 0;
    let left = Math.floor(num / 10);
    let rightmost = Math.floor(num % 10);
    if (rightmost === 8 && left % 10 === 8) return 2 + count8(left);
    else if (rightmost === 8) return 1 + count8(left)
    else return count8(left);
}

console.log(count8(8))     // → 1
console.log(count8(818))   // → 2
console.log(count8(8818))  // → 4