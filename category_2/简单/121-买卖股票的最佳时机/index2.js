/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0,
        len = prices.length;

    /**
     * 2. 确定关系式
     *
     */

    // 3. 定义初始值，第 0 天如果式同一天买入卖出，那么利润就是 0 所以 dp[0] = 0
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            maxP = Math.max(prices[i] - prices[j], maxP);
        }
    }
    return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
