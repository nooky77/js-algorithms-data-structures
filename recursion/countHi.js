// Given a string, compute recursively (no loops) the number
// of times lowercase "hi" appears in the string.

function countHi(str){
    if(str.length < 2) return 0;
    if(str[0] === "h" && str[1] === 'i') return 1 + countHi(str.slice(1));
    else return countHi(str.slice(1));
}

console.log(countHi("xxhixx")) // → 1
console.log(countHi("xhixhix"))// → 2
console.log(countHi("hi"))     // → 1