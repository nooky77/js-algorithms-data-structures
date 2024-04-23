// Given a string, compute recursively a new string
// where all the adjacent chars are now separated by a "*".

function allStar(str){
    let newStr = "";
    if(str.length < 1) return newStr;
    if(str.length === 1) return newStr += str[0];
    return newStr += str[0] + "*" + allStar(str.slice(1));
}

console.log(allStar("hello")) //→ "h*e*l*l*o"
console.log(allStar("abc")) //→ "a*b*c"
console.log(allStar("ab")) //→ "a*b"