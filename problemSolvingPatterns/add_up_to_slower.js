function addUp(n){
    let result = 0;
    for (var i = 0; i <= n; i++){
        result += i;
    }
    return result;
}

console.log(addUp(100));