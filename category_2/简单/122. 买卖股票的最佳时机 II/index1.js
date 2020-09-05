/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // 可以画个折线图来看，我们只要当天的价格，比前一天的价格大就是我们的利润
    let maxProfitValue = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfitValue += prices[i] - prices[i - 1];
        }
    }
    return maxProfitValue;
};

console.log(maxProfit([1, 7, 2, 3, 6, 7, 6, 7]));
