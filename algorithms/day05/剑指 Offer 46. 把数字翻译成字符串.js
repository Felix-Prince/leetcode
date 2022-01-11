/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let str = num.toString();
    let len = str.length;
    if (len < 2) {
        return len;
    }
    let dp = Array.from({ length: len + 1 });
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 1; i < len; i++) {
        dp[i + 1] = dp[i];
        let current = 10 * str[i - 1] + Number(str[i]);
        if (current > 9 && current < 26) {
            dp[i + 1] = dp[i] + dp[i - 1];
        }
    }
    return dp[len];
};

console.log(translateNum(12258));
