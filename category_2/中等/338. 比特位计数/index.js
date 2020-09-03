/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let dp = Array(num + 1).fill(0);
    for (let i = 1; i <= num; i++) {
        let j = i & (i - 1);
        dp[i] = dp[j] + 1;
    }
    return dp;
};

console.log(countBits(process.argv[2]));
