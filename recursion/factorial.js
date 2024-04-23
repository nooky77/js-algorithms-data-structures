// Iterative
// function factorial(num){
//     let result = 1
//     for(let i = num; i > 0; i--){
//         result *= i;
//     }
//     return result;
// }

// Recursive
function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));