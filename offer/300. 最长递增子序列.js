/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let len = nums.length;
    if (!len) return 0;
    // 1. 定义 dp[i], 以第 i 个数结尾时的最长递增子序列的长度
    let dp = [];

    /**
     * 2. 定义推导公式
     *    把第 j 个数放在第 i 个前面，判断当前的长度和 dp[j] + 1 比较，取最大的
     *    以下面第一个数组为例，当 nums[i] = 10 的时候，nums[j] = 4 的时候，显然此时 dp[i] 的值为 6，dp[j] 的值为 3
     *    此时取 dp[i] = 6 和 (dp[j] = 3) + 1 这个的最大值，显而易见是 dp[i] = 6
     *    dp[i] = Math.max(dp[i], dp[j]+1), j < i
     *    最后结果取数组中的最大值就行
     */

    // 3. 定义初始值
    dp[0] = 1;
    for (let i = 1; i < len; i++) {
        dp[i] = 1;
        for (let j = 0; j <= i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
