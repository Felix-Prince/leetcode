/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let n = s.length;
    // 1. 定义 dp[i], s[0:i] 是否是字典内的合法单词
    let dp = new Array(n + 1).fill(false);
    /**
     * 2. 推导公式
     *    已知，dp[i] 表示长度为 i 的 s[0:i] 子串是否由字典组成，而我们需要知道的是 dp[n] 的结果，要求 n 的时候，我们需要判断 n 里的单词是否合法
     *    这时候我们需要一个指针 j 来对这个结果进行分割，分割的子串 s1 = [0～j-1], s2 = [j:n],我们要求 n 的情况，我们可以把这个问题先细化一下
     *    假设我们要知道长度为 i 的时候，同样我们需要一个 j 来进行分割，s[0:i] 子串的 dp[i+1] ，是否为真,取决于两点
     *    a. 它的前缀子串 s[0:j-1] 的 dp[j] ，是否为真
     *    b. 剩余子串 s[j:i]，是否是单个单词。
     */

    // 3. 定义初始值，初始值就是 s1 ="" 的情况，这时候人为是合法的
    dp[0] = true;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            // 这里就是判断上面的两点
            if (dp[j] && wordDict.includes(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};
// var wordBreak = function (s, wordDict) {
//     let n = s.length;
//     let dp = new Array(n + 1).fill(false);
//     dp[0] = true;

//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (dp[j] && wordDict.includes(s.substr(j, i - j))) {
//                 dp[i] = true;
//                 break;
//             }
//         }
//     }
//     return dp[n];
// };

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
