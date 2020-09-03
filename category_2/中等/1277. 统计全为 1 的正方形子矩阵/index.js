/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    // 1. dp[i][j] 表示以 [i,j] 为正方形的右下角时，可以形成多少个正方形
    let m = matrix.length,
        n = matrix[0].length;
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    /**
     * 2. 推导关系式
     *      因为 [i,j] 是正方形的右下角，所以我需要判断左上、上、左 这三个方向就行（注：这里说的是 dp ）
     *      当执行到 [i,j] = 1 的时候，表示该位置至少有一个正方形，然后扩散到上面三个方向看，如果另外三个方向中有个位置是 0 表示那个位置无法形成正方形
     *      如果三个位置中没有 0 表示以 [i,j] 为右下角的正方形还可继续扩张，具体可以扩展到什么位置呢，需要以最小的为基准
     *      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
     */

    //  3. 定义初始值，当 i= 0 或者 j = 0 的时候，无需判断三个方向，因此该位置的值就是 matrix[i][j] 的值

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) continue;
            else if (i == 0 || j == 0) dp[i][j] = matrix[i][j];
            else
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
    }
    return dp.reduce(
        (acc, current) => current.reduce((ac, cur) => ac + cur, acc),
        0
    );
};

console.log(
    countSquares([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
    ])
);
console.log(
    countSquares([
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0],
    ])
);
