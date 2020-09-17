/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n == 0) return [];
    // 1. dp[i] 使用 i 对括号能生成的组合
    let dp = [];

    /**
     * 2. 推导关系式
     *      i 对括号的一个组合，在 i - 1 对括号的基础上得到
     *      i 对括号的一个组合，一定以左括号 "(" 开始，不一定以 ")" 结尾。为此，我们可以枚举新的右括号 ")" 可能所处的位置，得到所有的组合；
     *      枚举的方式就是枚举左括号 "(" 和右括号 ")" 中间可能的合法的括号对数，而剩下的合法的括号对数在与第一个左括号 "(" 配对的右括号 ")" 的后面，这就用到了以前的状态。
     * dp[i] = '('+ dp[可能的括号对数]+ ')' + dp[剩余括号对数]
     * 可能的括号对数 + 剩余的括号对数 = i-1，故 “可能的括号对数” j 可以从 0 开始，最多不能超过 i， 即 i - 1；
     * “剩下的括号对数” + j = i - 1，故 “剩下的括号对数” = i - j - 1
     * dp[i] = "(" + dp[j] + ")" + dp[i- j - 1] , j = 0, 1, ..., i - 1
     */

    //  3. 定义初始值：初始状态：因为我们需要 0 对括号这种状态，因此状态数组 dp 从 0 开始，0 个括号当然就是 [""]。
    dp.push([""]);

    for (let i = 1; i <= n; i++) {
        let cur = [];
        for (let j = 0; j < i; j++) {
            let may = dp[j],
                other = dp[i - j - 1];

            for (let k = 0; k < may.length; k++) {
                const s1 = may[k];
                for (let l = 0; l < other.length; l++) {
                    const s2 = other[l];
                    cur.push("(" + s1 + ")" + s2);
                }
            }
        }
        dp.push(cur);
    }
    return dp[n];
};

console.log(generateParenthesis(process.argv[2]));
