// Given a non-negative int n, return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(num){
    if(num < 1) return 0;
    if(num === 1) return 1;
    return sumDigits(Math.floor(num / 10)) + (num % 10);
}

console.log(sumDigits(126)) // → 9
console.log(sumDigits(49))  // → 13
console.log(sumDigits(12))  // → 3