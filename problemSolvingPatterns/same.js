/**
 * Write function called same(arr1, arr2), which accepts two arrays.
 * It should return true if every value in the first array has it's corresponding
 * value squared in the second array
 */
// O(N)

// function same(arr1, arr2) {
//     for (let num of arr1){
//         let square = num * num;
//         if (arr2.includes(square)){
//             let index = arr2.indexOf(square);
//             arr2.splice(index, 1);
//         } else {
//             return false
//         }
//     }
//     return true
// }

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let freq_arr1 = {};
    let freq_arr2 = {};
    for (let num of arr1){
        freq_arr1[num] ? freq_arr1[num]++ : freq_arr1[num] = 1;
    }
    for (let num of arr2){
        freq_arr2[num] = (freq_arr2[num] || 0) + 1;
    }

    for (let key in freq_arr1){
        let square = key * key;
        if (!(square in freq_arr2)){
            return false;
        }
        if (freq_arr2[square] !== freq_arr1[key]){
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [4, 9, 1])); // True
console.log(same([1, 2, 3], [9, 1]));    // False
console.log(same([1, 2, 1], [4, 4, 1])); // False