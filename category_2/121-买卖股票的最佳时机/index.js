/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0,
        minPrice = prices[0],
        len = prices.length;

    /**
     * 2. 确定关系式
     *  minPrice 表示 0～i 这之间价格最低的，适合买入
     *  卖出的时候要求利润最大 ==> prices[i] - minPrice 与 maxP 的最大值
     */

    // 3. 定义初始值，第 0 天如果式同一天买入卖出，那么利润就是 0 所以 dp[0] = 0
    for (let i = 1; i < len; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxP = Math.max(prices[i] - minPrice, maxP);
    }
    return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
