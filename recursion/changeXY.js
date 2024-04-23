// Given a string, compute recursively (no loops) a new string
// where all the lowercase 'x' chars have been changed to 'y' chars.

function changeXY(str){
    if(str.length < 1) return str;
    let newStr = "";
    if(str[0] === "x") newStr += "y" + changeXY(str.slice(1));
    else newStr += str[0] + changeXY(str.slice(1));
    return newStr;
}

console.log(changeXY("codex"))  //→ "codey"
console.log(changeXY("xxhixx")) //→ "yyhiyy"
console.log(changeXY("xhixhix"))// → "yhiyhiy"