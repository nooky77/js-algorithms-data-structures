// Given base and n that are both 1 or more,
// compute recursively (no loops) the value of base to the n power,
// so powerN(3, 2) is 9 (3 squared).

function powerN(num, pow) {
    if(pow === 0) return 1;
    return num * powerN(num, pow - 1);
}

console.log(powerN(3, 1)) // → 3
console.log(powerN(3, 2)) // → 9
console.log(powerN(3, 3)) // → 27