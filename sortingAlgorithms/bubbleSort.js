// function bubbleSort2(arr){
//     let start = 0;
//     let end = arr.length - 1;
//     while(end > start) {
//         sorted = true;
//         if(arr[start] > arr[start + 1]){
//             [arr[start], arr[start + 1]] = [arr[start + 1], arr[start]];
//         }
//         start++;
//         if(start === end){
//             start = 0;
//             end --;
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort2([9,2,4,3,8,1]));

function bubbleSort(arr){
    let sorted = false;
    for(let end = arr.length; end > 0; end--){
        sorted = true;
        for(let start = 0; start < end - 1; start++){
            console.log(arr[start], arr[start + 1])
            if(arr[start] > arr[start + 1]){
                [arr[start], arr[start + 1]] = [arr[start + 1], arr[start]];
                sorted = false;
            }
        }
        if(sorted) break;
    }
    return arr;
}
console.log(bubbleSort([1, 2, 4, 3, 5, 6]));

