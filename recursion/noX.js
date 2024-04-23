// Given a string, compute recursively a new string
// where all the 'x' chars have been removed.

function noX(str){
    if(str.length < 1) return str;
    let newStr = "";
    if(str[0] === "x") return newStr += noX(str.slice(1));
    else return newStr += str[0] + noX(str.slice(1));
}

console.log(noX("xaxb")) //→ "ab"
console.log(noX("abc"))  //→ "abc"
console.log(noX("xx"))   //→ ""