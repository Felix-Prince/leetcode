/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
    // 1 dp[i] 表示走到第 i 个台阶有几种走法
    let dp = Array(n).fill(0);
    /**
     * 2. 推导关系式，因为只能走 1、2、3 步，所以，走到第 i 个台阶只能是从 i-1 、i-2、i-3 走过来
     * dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
     */
    // 3. 初始值
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007;
    }
    return dp[n];
};

console.log(waysToStep(process.argv[2]));
