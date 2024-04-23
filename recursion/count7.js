// Given a non-negative int n, return the count of the occurrences of 7 as a digit,
// so for example 717 yields 2. (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function count7(num){
    if(num < 7) return 0;
    if(num % 10 === 7){
        return 1 + count7(Math.floor(num / 10));
    }else {
        return 0 + count7(Math.floor(num / 10));
    }
}

// console.log(count7(717)) // → 2
// console.log(count7(7))   // → 1
// console.log(count7(123)) // → 0
console.log(count7(77176)) // → 3