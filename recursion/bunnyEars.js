// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies
// recursively (without loops or multiplication).

function bunnyEars(num){
    if(num < 1) return 0;
    if(num === 1) return 2;
    return 2 + bunnyEars(num - 1);
}

// console.log(bunnyEars(0)) // → 0
// console.log(bunnyEars(1)) // → 2
// console.log(bunnyEars(2)) // → 4

// We have bunnies standing in a line, numbered 1, 2, ...
// The odd bunnies (1, 3, ..) have the normal 2 ears.
// The even bunnies (2, 4, ..) we'll say have 3 ears,
// because they each have a raised foot.
// Recursively return the number of "ears" in the bunny line 1, 2,
// ... n (without loops or multiplication).

function bunnyEars2(num){
    let result = 0;
    if(num < 1) return 0;
    if(num % 2 === 0) {
        result += 3;
    } else {
        result += 2;
    }
    result = result + bunnyEars2(num - 1);
    return result;
}

console.log(bunnyEars2(0)) // → 0
console.log(bunnyEars2(1)) // → 2
console.log(bunnyEars2(2)) // → 5
console.log(bunnyEars2(3)) // → 7