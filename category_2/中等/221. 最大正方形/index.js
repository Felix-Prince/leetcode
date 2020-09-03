/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length == 0) return 0;
    // 1. dp[i][j] 表示以 [i,j] 为右下角时，形成的正方形的最大边长
    let m = matrix.length,
        n = matrix[0].length;
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) continue;
            else if (i == 0 || j == 0) dp[i][j] = matrix[i][j];
            else
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
    }
    let maxLen = Math.max(...dp.map((item) => Math.max(...item)));
    return maxLen * maxLen;
};

// console.log(
//     maximalSquare([
//         [1, 0, 1, 0, 0],
//         [1, 0, 1, 1, 1],
//         [1, 1, 1, 1, 1],
//         [1, 0, 0, 1, 0],
//     ])
// );

console.log(
    maximalSquare([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
    ])
);
