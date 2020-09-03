/**
 * https://leetcode-cn.com/problems/matrix-block-sum/solution/hua-tu-zuo-da-by-ke-xue-jia-12/
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
    let row = mat.length,
        col = mat[0].length;
    let dp = Array.from({ length: row }, () =>
        Array.from({ length: col }, () => 0)
    );
    dp[0][0] = mat[0][0];

    for (let i = 1; i < row; i++) {
        dp[i][0] = dp[i - 1][0] + mat[i][0];
    }
    for (let j = 1; j < col; j++) {
        dp[0][j] = dp[0][j - 1] + mat[0][j];
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            // 因为在 dp[i - 1][j] 和 dp[i][j - 1] 中已经加过 dp[i - 1][j - 1]
            dp[i][j] =
                dp[i - 1][j] + dp[i][j - 1] + mat[i][j] - dp[i - 1][j - 1];
        }
    }

    console.log(dp);

    let ans = Array.from({ length: row }, () =>
        Array.from({ length: col }, () => 0)
    );
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            ans[i][j] = processing(
                dp,
                Math.max(0, i - K),
                Math.max(0, j - K),
                Math.min(row - 1, i + K),
                Math.min(col - 1, j + K)
            );
        }
    }
    return ans;
};
function processing(dp, rowStart, colStart, rowEnd, colEnd) {
    return (
        dp[rowEnd][colEnd] -
        (rowStart - 1 < 0 ? 0 : dp[rowStart - 1][colEnd]) -
        (colStart - 1 < 0 ? 0 : dp[rowEnd][colStart - 1]) +
        (colStart - 1 < 0 || rowStart - 1 < 0
            ? 0
            : dp[rowStart - 1][colStart - 1])
    );
}

console.log(
    matrixBlockSum(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        1
    )
);
console.log(
    matrixBlockSum(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        2
    )
);

[
    [1, 3, 6],
    [5, 12, 21],
    [12, 27, 45],
];
