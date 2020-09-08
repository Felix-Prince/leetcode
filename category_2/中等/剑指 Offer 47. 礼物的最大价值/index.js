/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    // 1. dp[i][j] 当走到[i,j]时的最大价值
    /**
     * 2. 推导关系式，因为规定了只能往右或往下走，因此 dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
     */
    // 3. 初始化，因为只能往右和往下，最上面的和最左边的他们没有更上面的或者更左边的
    if (grid.length == 0) return 0;
    let m = grid.length,
        n = grid[0].length;
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );
    dp[0][0] = grid[0][0];

    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
        // dp[0][i] = dp[0][i] + grid[0][i];
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[m - 1][n - 1];
};

console.log(
    maxValue([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ])
);
