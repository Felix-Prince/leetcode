/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // 题解：
    // 我们想要求长度为n的绳子剪掉后的最大乘积，可以从前面比n小的绳子转移而来
    // 用一个dp数组记录从0到n长度的绳子剪掉后的最大乘积，也就是dp[i]表示长度为i的绳子剪成m段后的最大乘积，初始化dp[2] = 1
    // 我们先把绳子剪掉第一段（长度为j），如果只剪掉长度为1，对最后的乘积无任何增益，所以从长度为2开始剪
    // 剪了第一段后，剩下(i - j)长度可以剪也可以不剪。如果不剪的话长度乘积即为j * (i - j)；如果剪的话长度乘积即为j * dp[i - j]。取两者最大值max(j * (i - j), j * dp[i - j])
    // 第一段长度j可以取的区间为[2,i)，对所有j不同的情况取最大值，因此最终dp[i]的转移方程为
    // dp[i] = max(dp[i], max(j * (i - j), j * dp[i - j]))
    // 最后返回dp[n]即可
    let i,
        j,
        dp = new Array(n + 1).fill(0),
        nowBigger;
    dp[2] = 1;
    // 如果只剪掉长度为1，对最后的乘积无任何增益，所以从长度为2开始剪
    for (i = 2; i <= n; i++) {
        for (j = 1; j < i; j++) {
            // 剪了第一段后，剩下(i - j)长度可以剪也可以不剪。如果不剪的话长度乘积即为j * (i - j)；如果剪的话长度乘积即为j * dp[i - j]。取两者最大值
            nowBigger = Math.max(j * (i - j), j * dp[i - j]);
            // 对于同一个i，内层循环对不同的j都还会拿到一个max，所以每次内层循环都要更新max
            dp[i] = Math.max(dp[i], nowBigger);
        }
    }
    return dp[n];
};

console.log(cuttingRope(2));
console.log(cuttingRope(10));
