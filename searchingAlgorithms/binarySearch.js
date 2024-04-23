let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

// Recursive
function binarySearch(arr, state){
    if(arr.length < 1) return -1;
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((end + start) / 2);
    if(arr[middle] === state) return middle;
    else if(arr[middle] > state) return binarySearch(arr.slice(start, middle - 1), state);
    else return binarySearch(arr.slice(middle + 1, end), state);
}

// console.log(binarySearch(states, "Nevada"));
// console.log(binarySearch(states, "Sarthe"));

// Iterative
function binarySearch2(states, findState){
    let start = 0;
    let end = states.length - 1;
    while(start <= end){
        let middle = Math.floor((end + start) / 2);
        if(states[middle] === findState) return middle;
        if(states[middle] > findState) end = middle - 1;
        else start = middle + 1;
    }
    return -1
}

console.log(binarySearch2(states, "Nevada"));
console.log(binarySearch2(states, "Sarthe"));