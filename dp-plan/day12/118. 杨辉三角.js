/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let dp = [];
    for (let i = 0; i < numRows; i++) {
        dp[i] = new Array(i + 1).fill(0);
        dp[i][0] = 1;
    }

    for (let i = 1; i < numRows; i++) {
        for (let j = 1; j <= i; j++) {
            if (i === j || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
        }
    }
    console.log(dp);
    return dp;
};

console.log(generate(5));
// console.log(generate(process.argv[2]))
