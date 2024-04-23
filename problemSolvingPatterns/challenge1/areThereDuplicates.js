// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

const areThereDuplicatesCounter = (...args) => {
    let count = {};
    for(let value of args){
        if(count[value]) return true;
        count[value] = 1;
    };
    return false;
};

// console.log(areThereDuplicatesCounter(1, 2, 3)); // false
// console.log(areThereDuplicatesCounter('a', 'b', 'c', 'a')); // true

// --------------------------------------------------------------------------------------------

// Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time Complexity - O(n log n)
// Space Complexity - O(1)

// Solution with two pointers (two variables)

const sortedArr = (arr) => {
    let i = 0;
    let j = 1
    while (i < arr.length) {
        if (arr[i] > arr[j]){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i = 0;
            j = 1;
        } else {
            i++;
            j++;
        }
    }
    return arr;
}

const areThereDuplicatesPointers = (...args) => {
    if (!args.length) return false;
    args = sortedArr(args);
    for(let i = 0; i < args.length; i++){
        if (args[i] === args[i + 1]) return true;
    }
    return false;
}

console.log(areThereDuplicatesPointers(1, 2, 3)); // false
console.log(areThereDuplicatesPointers('a', 'b', 'c', 'a')); // true