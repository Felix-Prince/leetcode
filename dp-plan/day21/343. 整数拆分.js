/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let dp = new Array(n + 1);
    dp[0] = dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        let curMax = 0;
        for (let j = 1; j < i; j++) {
            // 分两种情况，一种是就拆成两个数，另一种是继续拆
            curMax = Math.max(curMax, Math.max((i - j) * j, j * dp[i - j]));
        }
        dp[i] = curMax;
    }
    return dp[n];
};

console.log(integerBreak(2));
console.log(integerBreak(10));
