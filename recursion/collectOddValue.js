// Iterative
// function collectOddValue(arr){
//     let result = [];
//     for (let num of arr){
//         if (num % 2 !== 0) result.push(num);
//     }
//     return result;
// }

// Recursive Helper Function, Function who call a recursive function;
// function collectOddValue(arr){
//     let arrayOdds = [];
//     function checkOdd(arr){
//         if (arr.length === 0) return;
//         if (arr[0] % 2 !== 0) arrayOdds.push(arr[0]);
//         checkOdd(arr.splice(1));
//     };
//     checkOdd(arr);
//     return arrayOdds;
// }

// True recursive
function collectOddValue(arr){
    let result = [];
    if (arr.length === 0) return result;
    if (arr[0] % 2 !== 0) result.push(arr[0]);
    result = result.concat(collectOddValue(arr.splice(1)));
    return result;
}

console.log(collectOddValue([4, 8, 15, 16, 23, 42]));