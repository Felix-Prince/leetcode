/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 1. dp[i] 表示到 i 个台阶有几种方法
    let dp = Array(n).fill(0);

    // 2. 推导关系式，因为 一次只能走 1 阶或者 2 阶，所以可知要走到第 i 阶，有两种，1、从 i-1 走到，2、从 i-2 走到
    // 所以 dp[i] = dp[i-1] + dp[i-2]

    // 3. 定义初始值
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

console.log(climbStairs(process.argv[2]));
