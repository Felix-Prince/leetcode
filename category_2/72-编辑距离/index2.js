/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length + 1;
    let n = word2.length + 1;
    let dp = new Array(m);
    for (let k = 0; k < m; k++) {
        dp[k] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = j;
    }
    console.log(dp);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m - 1][n - 1];
};

console.log(minDistance("horse", "ros"));
