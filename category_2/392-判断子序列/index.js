/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // 1. dp[i][j] 表示s串的长度为i的前缀是否是t串的长度为j的前缀的子序列
    let dp = Array.from({ length: s.length + 1 }, () =>
        Array.from({ length: t.length + 1 }, () => false)
    );
    /**
     * 2. 关系推导式
     *      2.1 当 s[i] == t[j] ,表示 s[0 ～ i]（这表示 0 ～ i 这么长的字串）是 t[0 ～ j]（同理） 的子串，因此可得出 [i,j] 的结果与 [i-1, j-1] 的结果是一致的
     *      2.2 当 s[i] != t[j] ,表示当前这个 t[j] 是可以删除的，所以这个的取值就是 t[j] 的前一个字符的值
     *
     * =========>
     *
     * dp[i][j] = dp[i-1][j-1]
     * dp[i][j] = dp[i][j-1]
     * 合并后
     * dp[i][j-1] || (dp[i-1][j-1] && s[i-1]===t[j-1])
     */

    //  3. 定义初始值
    dp[0][0] = true; // 注意：dp 数组的长度额外 +1 ，这里是为了方便，把 s =""  和 t ="" 的情况一起包含进去
    dp[0].fill(true);

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = i; j < t.length + 1; j++) {
            dp[i][j] =
                dp[i][j - 1] || (dp[i - 1][j - 1] && s[i - 1] === t[j - 1]);
        }
    }
    return dp[s.length][t.length];
};
