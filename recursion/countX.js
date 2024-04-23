// Given a string, compute recursively (no loops)
// the number of lowercase 'x' chars in the string.

function countX(str){
    if(str.length === 0) return 0;
    if(str[0] === "x") return 1 + countX(str.slice(1));
    else return countX(str.slice(1));
}

console.log(countX("xxhixx")) // → 4
console.log(countX("xhixhix")) // → 3
console.log(countX("hi")) // → 0