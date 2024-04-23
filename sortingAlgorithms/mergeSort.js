function merge(arr1, arr2){
    let sorted = [];
    let left = 0;
    let right = 0;
    while (left < arr1.length && right < arr2.length){
        if(arr1[left] < arr2[right]){
            sorted.push(arr1[left]);
            left++;
        } else {
            sorted.push(arr2[right]);
            right++;
        }
    }
    while (left < arr1.length){
        sorted.push(arr1[left]);
        left++;
    }
    while (right < arr2.length){
        sorted.push(arr2[right]);
        right++;
    }
    return sorted;
}

function mergeSort(arr){
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([8, 42, 4, 23, 16, 15]))