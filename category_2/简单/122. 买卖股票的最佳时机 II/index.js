/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    /**
     * 我们维护两个变量 \mathrm{cash}cash 和 \mathrm{hold}hold，前者表示当我们不持有股票时的最大利润，后者表示当我们持有股票时的最大利润。
     * 这里把手续费统一在卖出的时候进行扣除
     * cash 分为两种，1.一直不持有，利润等于之前的，2.原先持有，今天卖出了，那么今天的利润就是原先持有的 + （当天的价格 - 手续费 ）
     * hold 分为两种，1.一直持有，利润等于之前的，2.原先不持有，今天买入了，那么今天的利润就是原先不持有的 - 今天的买入价格
     */
    let cash = 0,
        hold = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i]);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
