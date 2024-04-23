// Given an array of ints, compute recursively if the array contains
// somewhere a value followed in the array by that value times 10.

function array220(arr){
    if(arr.length < 2) return false;
    if(arr[0] * 10 === arr[1]) return true;
    else return array220(arr.slice(1));
}

console.log(array220([1, 2, 20])) //→ true
console.log(array220([3, 30])) //→ true
console.log(array220([3])) //→ false