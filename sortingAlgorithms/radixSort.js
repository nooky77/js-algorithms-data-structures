// Get index from number
function getDigit(num, index){
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

// Count the length of number
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Get largest length of num in arr
function mostDigit(arr){
    let max = -Infinity;
    for(let num of arr){
        let getDigit = digitCount(num);
        max = Math.max(max, getDigit);
    }
    return max;
}

function radixSort(arr){
    let maxLen = mostDigit(arr);
    for(let pass = 0; pass < maxLen; pass++){
        let bucket = Array.from({length: 10}, () => []);
        for(let num of arr){
            let digit = getDigit(num, pass);
            bucket[digit].push(num)
        };
        arr = bucket.flat();
    }
    return arr;
}

console.log(radixSort([22, 5, 87 ,6 ,21 ,32 ,4 ,666 ,-1]));