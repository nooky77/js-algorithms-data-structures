// The fibonacci sequence is a famous bit of mathematics,
// and it happens to have a recursive definition.
// The first two values in the sequence are 0 and 1 (essentially 2 base cases).
// Each subsequent value is the sum of the previous two values,
// so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
// Define a recursive fibonacci(n) method that returns the nth fibonacci number,
// with n=0 representing the start of the sequence.

function fibonacci(num){
    if(num < 1) return 0;
    if(num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(0)) // → 0
console.log(fibonacci(1)) // → 1
console.log(fibonacci(2)) // → 1
console.log(fibonacci(10)) // → 55