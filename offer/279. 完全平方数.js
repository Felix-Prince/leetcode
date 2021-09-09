/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    //  1. 定义 dp， 表示 i 最少可以由多少个完全平方数累加得到
    let dp = new Array(n + 1).fill(0);

    //  2. 定义推到公式
    //  如果我们要知道组成 i 最少需要多少个，只需知道 i - j^2 最少需要多少个因此就可以有如下的推到公式
    //  因为累加得到 i 的方法有多个，我们需要去其中的最小值，因此需要一个 min 来维护之前的最小值，以这个最小值再加 1 表示实际的结果
    //  dp[i] = 1 + Math.min(dp[i - j^2], min)

    // 3. 定义初始值
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, dp[i - j * j]);
        }
        dp[i] = min + 1;
    }
    return dp[n];
};

console.log(numSquares(12));
console.log(numSquares(13));
