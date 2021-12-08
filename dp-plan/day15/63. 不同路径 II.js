/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // 1. dp[i][j] 表示到达 [i, j] 有多少种路径
    /**
     * 2. 推导公式
     * 正常情况下，没有障碍物的时候 dp[i][j] = dp[i-1][j] + dp[i][j-1]
     * 但是现在有障碍物的影响，假设 [i, j] 正好是障碍物，那么dp[i][j] = 0,即如果从这个位置往下走是不通的
     */
    // 3. 定义初始值，左边和上边，只能从上面或者右边移动，因此只有一条路,边也是有可能存在障碍物的，所以定义初始值的时候也要判断

    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;

    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0]) {
            dp[i][0] = 0;
        } else {
            if (i >= 1) {
                dp[i][0] = dp[i - 1][0];
            } else {
                dp[i][0] = 1;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i]) {
            dp[0][i] = 0;
        } else {
            if (i >= 1) {
                dp[0][i] = dp[0][i - 1];
            } else {
                dp[0][i] = 1;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j]) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([[1, 0]]));

console.log(
    uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
);
console.log(
    uniquePathsWithObstacles([
        [0, 1],
        [0, 0],
    ])
);
