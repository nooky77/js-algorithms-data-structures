//  * Function which accepts an array of integers and a number called n.
//  * The function should calculate the maximum sum of n consecutive elements
//  * in the array.

const maxSubarraySum = (arr, num) => {
    if (arr.length === 0) return null;
    let max = 0;
    let temp = 0;
    for(let i = 0; i < num; i++){
        max += arr[i];
    }
    temp = max;
    for(let index = num; index < arr.length; index++){
        temp = temp + arr[index] - arr[index - num];
        if (temp > max) max = temp;
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null