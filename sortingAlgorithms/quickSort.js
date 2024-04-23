function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let el of arr.slice(0, arr.length - 1)){
        pivot > el ? left.push(el) : right.push(el);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort([7, 2, 1, 8, 6, 9, 3, 5, 4]));

function pivot(arr, start = 0, end = arr.length - 1){
    let pivIdx = arr[start];
    let i = start;
    for(let j = start + 1; j < arr.length; j++){
        if(pivIdx > arr[j]){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[start], arr[i]] = [arr[i], pivIdx];
    return i;
}

function quickSort2(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let piv = pivot(arr, left, right);
        quickSort2(arr, left, piv - 1);
        quickSort2(arr, piv + 1, right);
    }
    return arr;
}

console.log(quickSort2([7, 2, 1, 8, 6, 9, 3, 5, 4]));