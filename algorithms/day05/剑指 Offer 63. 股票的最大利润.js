/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0,
        minPrice = prices[0],
        len = prices.length;

    // 于题目限定 “买卖该股票一次” ，因此前 ii 日最大利润 dp[i]dp[i] 等于前 i - 1i−1 日最大利润 dp[i-1]dp[i−1] 和第 ii 日卖出的最大利润中的最大值。
    // dp[i] = max(dp[i−1], prices[i] − minPrice))
    //  ===》 maxP = max(maxP,prices[i] - minPrice)

    for (let i = 1; i < len; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxP = Math.max(maxP, prices[i] - minPrice);
    }
    return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
