/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // dp推导公式 dp[i] = dp[i-1] + dp[i-2] i >=2
    let dp = new Array(n + 1);
    (dp[0] = 0), (dp[1] = 1);

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
