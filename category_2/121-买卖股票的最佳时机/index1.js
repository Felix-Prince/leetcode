/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0;
    // 1. dp[i] 表示第 i 天卖出的最大利润
    let dp = Array.from({ length: prices.length }, () => 0);

    /**
     * 2. 确定关系式
     *
     */

    // 3. 定义初始值，第 0 天如果式同一天买入卖出，那么利润就是 0 所以 dp[0] = 0

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = Math.max(prices[i] - prices[j], dp[i]);
        }
    }
    dp.sort((a, b) => b - a);
    return dp[0];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
