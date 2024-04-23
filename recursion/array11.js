// Given an array of ints, compute recursively the number
// of times that the value 11 appears in the array.

function array11(arr){
    if(arr.length < 1) return 0;
    if(arr[0] === 11) return 1 + array11(arr.slice(1));
    else return array11(arr.slice(1));
}

console.log(array11([1, 2, 11])) // → 1
console.log(array11([11, 11])) // → 2
console.log(array11([1, 2, 3, 4])) // → 0