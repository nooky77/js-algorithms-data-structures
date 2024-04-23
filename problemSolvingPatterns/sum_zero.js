//  * Write a function which accepts a sorted array of integers. The function should
//  * find the first pair where the sum is 0. Return an array that includes both values
//  * that sum to zero or undefined if a pair does not exist.

// const sum_zero = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//         }
//     }
// }

// const sum_zero = (arr) => {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j){
//         if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];

//         if (j === i + 1){
//             j = arr.length - 1;
//             i++;
//             continue;
//         }

//         if (arr[i] + arr[j] !== 0){
//             j--;
//             continue;
//         }
//     }
// };

const sum_zero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        sum > 0 ? right-- : left++;
    }
}

console.log(sum_zero([-3, -2, -1, 0, 1, 2, 3])) // -3
console.log(sum_zero([-3, -1, 1, 2, 4])) // -1
console.log(sum_zero([-2, 0, 1, 3])) // Undefined
console.log(sum_zero([1, 2, 3])) // Undefined