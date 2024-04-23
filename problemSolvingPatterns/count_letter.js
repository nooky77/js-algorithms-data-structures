// Write a function which takes a string and returns count of each character in the string.

// function count_letter(str){
//     str = str.toLowerCase();
//     let frequency = {};
//     for(let i = 0; i < str.length; i++){
//         let count = 1;
//         for(let j = i + 1; j < str.length; j++){
//             if(str[i] === str[j]){
//                 count++;
//             }
//         }
//         if(frequency.hasOwnProperty(str[i])) continue;
//         frequency[str[i]] = count;
//     }
//     return frequency;
// }

// function count_letter(str, frequency = {}){
//     if(str.length < 1) return frequency;
//     if (str[0].charCodeAt(0) > 96 && str[0].charCodeAt(0) < 123 || str[0].charCodeAt(0) > 47 && str[0].charCodeAt(0) < 58 ){
//             count_letter(str.slice(1, str.length), frequency)
//             if(frequency.hasOwnProperty(str[0])){
//                 frequency[str[0]]++;
//             } else {
//                 frequency[str[0]] = 1;
//             }
//     } else {
//         count_letter(str.slice(1, str.length), frequency)
//     }
//     return frequency;
// }

// function count_letter(str){
//     let frequency = {};
//     if (typeof str === 'number') {
//         str = (str).toString();
//     }
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++){
//         if (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123 || str[i].charCodeAt(0) > 47 && str[i].charCodeAt(0) < 58 ){
//             if(frequency.hasOwnProperty(str[i])){
//                 frequency[str[i]]++;
//             } else {
//                 frequency[str[i]] = 1;
//             }
//         }
//     };

//     return frequency;
// }


function count_letter(str){
    let frequency = {};
    for (let char of str){
        char = char.toLowerCase()
        if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123 || char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58 ){
            frequency.hasOwnProperty(char) ? frequency[char]++ : frequency[char] = 1;
        }
    };

    return frequency;
}

console.log(count_letter("massachuSette33! "));
console.log(count_letter("481445162342"));