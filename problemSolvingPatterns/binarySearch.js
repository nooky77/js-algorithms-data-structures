//  * Given a sorted array of integers, accept a value and return
//  * the index where the value passed to the function is located.
//  * If the value is not found, return -1

// O(n)
// const binarySearch = (arr, num) => {
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] === num) return i;
//     }
//     return -1;
// }

// O(logN)
const binarySearch = (arr, num) => {
    if (arr.length < 1) return -1
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        let half = Math.floor((left + right) / 2);
        let mid = arr[half];
        if (num === mid) return half;
        if (num < mid){
            right = mid - 1;
        }
        if (num > mid){
            left = half + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)); //4