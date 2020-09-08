/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // 1. dp[i][j] 表示移动到 [i,j] 位置时的最小路径值
    /**
     * 2. 推导关系式，在 [i,j] 位置的时候，可以是由 [i-1,j] 或者 [i-1,j-1] 走到，题目中的意思是下标相等或者下标+1，所以反过来就是用减
     */
    // 3. 初始值只有一个就是 dp[0][0] = triangle[0][0]
    let m = triangle.length;
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: m }, () => 0)
    );
    dp[0][0] = triangle[0][0];

    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        for (let j = 1; j < i; j++) {
            dp[i][j] =
                Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
        }
        // 单独处理最边界的值
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    }
    return Math.min(...dp[m - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
