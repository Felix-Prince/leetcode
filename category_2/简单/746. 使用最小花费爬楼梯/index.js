/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // 1. dp[i] 表示在第 i 个台阶的时候花费的最小体力
    let len = cost.length,
        minCost = 0;

    /**
     * 2. 推导关系式，因为第 i 个台阶只能由 i-1 或者 i-2 到达，取两个中的最小值
     * dp[i] = Math.min(dp[i-1],dp[i-2])
     */

    //  3. 定义初始值，因为可以从 0 或 1 的索引开始，也是初始值也即是这两个了
    let pre_1 = cost[0];
    let pre_2 = cost[1];

    for (let i = 2; i < len; i++) {
        minCost = Math.min(pre_1, pre_2) + cost[i];
        pre_1 = pre_2;
        pre_2 = minCost;
    }
    // 注：什么时候表示到顶部呢，即索引为 len 的时候，因此最后还需要一次单独的判断获取最小值
    return Math.min(pre_1, pre_2);
};

// console.log(minCostClimbingStairs([10, 15, 20]));s
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

// 空间复杂度 O（1）
