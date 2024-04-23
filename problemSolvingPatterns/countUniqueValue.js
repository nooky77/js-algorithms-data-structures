//  * Implement a function which accepts a sorted array, and counts
//  * the unique values in the array. There can be negative numbers.

// const countUniqueValue = (arr) => {
//     if (arr.length === 0) return 0;
//     let i = 0;
//     let j = i + 1;
//     let count = 1;
//     while (j < arr.length) {
//         if (arr[i] !== arr[j]){
//             count++;
//             i = j;
//             j += 1;
//         } else {
//             j++;
//         }
//     }
//     return count;
// }


const countUniqueValue = (arr) => {
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValue([1, 1, 1, 1, 1, 2])) //2
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12 , 12, 13])) //7
console.log(countUniqueValue([])) //0
console.log(countUniqueValue([-2, -1, -1, 0, 1])) //4