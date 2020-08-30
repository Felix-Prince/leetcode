/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 1. dp[i] 表示偷窃第 i 间的时候的最大金额
    let len = nums.length,
        dp = Array(len).fill(0);
    if (!len) return 0;
    if (len == 1) return nums[0];
    /**
     * 2.推导关系式
     *      2.1 首先偷第 i 间的时候，表示小偷是从第 i - 2 间过来的
     *      2.2 确定要不要偷第 i 间，判断 dp[i-2] + nums[i] 与 dp[i-1] 的大小
     */
    // 3. 定义初始值
    dp[0] = nums[0];
    // [2, 1] 这时应该是 2，所以下面需要如下处理
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1]));
