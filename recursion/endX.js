// Given a string, compute recursively a new string where
// all the lowercase 'x' chars have been moved to the end
// of the string.

function endX(str){
    let newStr = "";
    if(str.length < 1) return str;
    if(str[0] === "x") return endX(str.slice(1)) + "x";
    else return str[0] + endX(str.slice(1));
}

console.log(endX("xxre")) //→ "rexx"
console.log(endX("xxhixx")) //→ "hixxxx"
console.log(endX("xhixhix")) //→ "hihixxx"