// Iterative
// function sumRange(num){
//     let result = 1;
//     for(let i = num; i > 1; i--){
//         result += i;
//     }
//     return result;
// }

// Recursive
function sumRange(num){
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

console.log(sumRange(4));