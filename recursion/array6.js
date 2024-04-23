// Given an array of ints, compute recursively if the array contains a 6.
// We'll use the convention of considering only the part of the array that
// begins at the given index. In this way, a recursive call can pass index+1
// to move down the array.

function array6(arr){
    if(arr.length < 1) return false;
    if(arr[0] === 6){
        return true;
    } else return array6(arr.slice(1, arr.length));
}

console.log(array6([1, 6, 4])) // → true
console.log(array6([1, 4])) // → false
console.log(array6([6])) // → true