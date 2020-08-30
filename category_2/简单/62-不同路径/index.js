/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

console.log(uniquePaths(7, 3));

// 1. 确定 dp[i][j] 的含义，dp[i][j] 表示走到 [i,j] 位置有多少种路径
// 2. 找到关系，这题找关系其实很好找，我们要走到 [i,j] 只能从 [i-1,j] 和 [i,j-1] 两个过来，因此得出 [i,j] = [i-1,j] + [i,j-1]
// 3. 确定初始值，既然是 i-1 和 j-1 那么如果下标为 0 的时候就会越界，报错，so 只要是下标带 0 的都是初始值，[0][0~n-1] [0~m-1][0]

/**
 *
 * 补充 Array.from
 * Array.from 的第一个参数可以是一个伪数组对象或者一个可迭代的对象
 * { length: m } 这就是一个伪数组对象，因为数组一般都是有一个 length 属性
 * Array.from 第二个参数是一个回调函数，该函数接受一个参数，这个参数就是生成的新数组中的每个元素
 * Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
 * 这样就生成来一个二维数组
 */
