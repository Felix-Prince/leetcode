/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0;
    let len = prices.length;
    let dp = [];
    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < 3; j++) {
            dp[i][j] = 0;
        }
    }
    dp[0][0] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        dp[i][1] = dp[i - 1][0] + prices[i];
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    }
    return Math.max(dp[len - 1][1], dp[len - 1][2]);
};

console.log(maxProfit([1, 2, 3, 0, 2]));
