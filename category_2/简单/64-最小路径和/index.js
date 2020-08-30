/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    // 1. 定义 dp[i][j] 含义，即到 [i,j] 时的最小和是多少
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    // 2. 确定关系式，[i,j] 只能从 [i-1,j] 或者 [i,j-1] 到达，所以取两者的最小值
    // 3. 定义初始值，边界值都是我们的初始值，因 i-1 或者 j-1 不能为负数
    dp[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        // 顶上一行，只能右边的走到，因此只要把前面的值和当前位置的值加起来就行
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let i = 1; i < n; i++) {
        // 左边一列，只能是往下走，无法从右边的位置走到该处，所以从上往下加就行
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    return dp[m - 1][n - 1];
};

console.log(
    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ])
);
