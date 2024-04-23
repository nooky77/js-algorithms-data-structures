//  * Function which accepts an array of integers and a number called n.
//  * The function should calculate the maximum sum of n consecutive elements
//  * in the array.

// O(n2)
// const maxSubarraySum = (arr, num) => {
//     if (arr.length < num ) return null;
//     let max = -Infinity;
//     for(let i = 0; i <= arr.length - num; i++){
//         let temp = arr[i];
//         for(let j = i + 1; j < i + num; j++){
//             temp += arr[j]
//         }
//         if(temp > max) max = temp;
//     }
//     return max;
// }

// O(n)
const maxSubarraySum = (arr, num) => {
    if(arr.length < num) return null;
    let max = 0;
    let temp = 0;
    for(let i = 0; i < num; i++){
        max += arr[i];
    }
    temp = max;
    for(let i = num; i < arr.length; i++){
        temp = temp + arr[i] - arr[i - num];
        if(temp > max) max = temp;
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null