function fib(n){
    let tab = [0, 1, 1];
    for(let i = 3; i <= n; i++){
        tab[i] = tab[i - 1] + tab[i - 2];
    }
    return tab[n];
}

let arg = process.argv[2];
console.log(fib(arg));