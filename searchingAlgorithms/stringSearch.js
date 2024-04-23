const stringSearch = (str, word) => {
    let count = 0;
    let j = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] === word[j]){
            j++;
            if(j === word.length) {
                count += 1;
                j = 0;
            }
        } else {
            j = 0;
        }
    }
    return count;
}

console.log(stringSearch("harold said haha in hambourg", "ha"));