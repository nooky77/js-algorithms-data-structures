function fib(n, memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
}

let arg = process.argv[2];
console.log(fib(arg));