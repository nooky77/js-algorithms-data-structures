// Given a string, compute recursively a new string where identical
// chars that are adjacent in the original string are separated
// from each other by a "*".

function pairStar(str){
    let newStr = "";
    if(str.length < 1) return newStr;
    if(str[0] === str[1]) return newStr += str[0] + "*" + pairStar(str.slice(1));
    else return newStr += str[0] + pairStar(str.slice(1));
}

console.log(pairStar("hello")) // → "hel*lo"
console.log(pairStar("xxyy"))  // → "x*xy*y"
console.log(pairStar("aaaa"))  // → "a*a*a*a"