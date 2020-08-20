/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length,
        n = word2.length;
    // 1. 定义 dp[i][j] 含义，表示当 word1 长为 i,word2 长为 j，将 word1 转为 word2 最少操作次数 dp[i][j]
    let dp = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }, () => 0)
    );
    /**
     * 2. 推导关系
     *    2.1 当 word1[i] 与 word2 [j] 相等，这时候意思就是最后一个字母相同了，我不需要什么操作取决于前面的就行因此就有 dp[i][j] = dp[i-1][j-1]
     *    2.2 word1[i] 替换成 word2 [j]，也就是说前面的 i-1 和 j-1 的字符串已经相同，只要把最后这个单词替换一下就行，这就有 dp[i][j] = dp[i-1][j-1] + 1
     *    2.3 word1[i] 末尾插入一个字符后与 word2[j] 相等，也就是说 0～i 已经与 0～j-1 相等了，所以就有 dp[i][j] = dp[i][j-1] + 1
     *    2.4 word1[i] 删除最后一个字符，也就是说 0～i-1 与 0～j 相等了，所以就有 dp[i][j] = dp[i-1][j] + 1
     *
     * 注意：因为上面我们定义的 dp[i][j] 是 word1 为 i   word2 长度为 j   ==>  dp[i][j]
     * 如果这样 word2 长度为 i，word1 长度为 j  ==> dp[i][j] 还是 word1 转为 word2
     * 这时候上面 2.3 和 2.4 的含义正好就换一下了，即
     * word1[j] 末尾插入一个字符后与 word2[i] 相等，也就是说 0～j 已经与 0～i-1 相等了, dp[i][j] = dp[i-1][j] + 1
     * word1[j] 删除最后一个字符,也就是说 0～i 与 0～j-1 相等了, dp[i][j] = dp[i][j-1] + 1
     *
     * 综合：dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
     */

    /**
     *  3. 定义初始值
     * [
     *      [ 0, 1, 2, 3 ],
     *      [ 1, 0, 0, 0 ],
     *      [ 2, 0, 0, 0 ],
     *      [ 3, 0, 0, 0 ],
     *      [ 4, 0, 0, 0 ],
     *      [ 5, 0, 0, 0 ]
     *  ]
     */

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
};

console.log(minDistance("horse", "ros"));
