function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([4, 8, 42, 16, 23, 523, 42], 9)); // False
console.log(linearSearch([4, 8, 42, 16, 23, 523, 42], 23)); // True