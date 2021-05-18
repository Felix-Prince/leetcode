/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    // 1. 定义 dp[i] 表示字符串 s 前 i 个字符的解码方法数
    let n = s.length;
    let dp = new Array(n + 1).fill(0);
    /**
     * 2. 推导关系式
     *    假设 s = 1 dp[1] = 1
     *        s = 12 dp[2] = dp[i-1] + dp[i-2] 我们只看最后一个数字的时候有几种结果，我们可以是只有由一个 2 得到
     *        那么结果就相当于 dp[2] += dp[i-1]，我也可以是有 12 这个整体得到，但是这时候我就是根据 dp[i-2] 的基础上 加上一种可能
     *        因此就有了再次累加的结果 dp[2]+= dp[i-2]
     *     注意：这里有边界值，两个数字不能 > 26，且一个数字不能为0
     */
    // 3. 定义初始值，其实上述的推导我们可以通过两个 if 来分开执行，同时由于我们的 i 是从 1 开始的，但是我们的下标一般都是从 0 开始，
    // 因此这里其实我们的初始值其实就是 dp[0] = 1, 可以理解为空字符的时候也有一种结果
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== "0") {
            dp[i] += dp[i - 1];
        }
        if (i > 1 && s[i - 2] !== "0" && s[i - 2] * 10 + +s[i - 1] <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
};

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
