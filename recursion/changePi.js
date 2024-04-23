// Given a string, compute recursively (no loops)
// a new string where all appearances of "pi"
// have been replaced by "3.14".

function changePi(str){
    if(str.length < 1) return str;
    let newStr = "";
    let pi = 3.14;
    let check = str[0] + str[1];
    if(check === "pi") return newStr += pi + changePi(str.slice(2));
    else return newStr += str[0] + changePi(str.slice(1));
}

console.log(changePi("xpix"));// → "x3.14x"
console.log(changePi("pipi"));// → "3.143.14"
console.log(changePi("pip"));// → "3.14p"