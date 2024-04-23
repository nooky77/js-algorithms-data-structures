// Iterative way

// function countdown(num){
//     for(let i = num; i >= 0; i--){
//         console.log(i);
//     }
//     return "All Done!";
// }

// console.log(countdown(10));


// Recursive way
function countdown(num){
    console.log(num)
    if (num <= 0){
        console.log("All Done!");
        return;
    }
    countdown(num - 1);
}

countdown(10);