/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
    if (!nums.length) return 0;
    if (nums.length == 1) return nums[0];
    // 1. dp[i] 表示到第 i 个预约的时候最长的预约时长
    let dp = [];

    /**
     * 2. 确定推导公式
     *    2.1 如果约了第一个，则第 i = 0 个 dp[0] = nums[0]
     *    2.2 判断第二个要不要约，这时候就判断 dp[1] = Math.max(nums[0], nums[1])
     *    2.3 判断第三个要不要约，这时候因为第二个无法约，约我们只能看第一个，这时候 => dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
     *    2.4 判断第四个要不要约，这时候因为第二个已经是之前子集中最大了，所以只要判断当前的 + 第二个的 与 前一个比较，如果小于前一个表示当前这个不约，如果大于前一个，表示当前这个约，之后以此类推
     * 因此得出  dp[i] = Math.max( dp[i-2]+ nums[i], dp[i-1])  i >= 2
     */

    // 3. 定义 dp 初始值
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return Math.max(dp[nums.length - 1]);
};

console.log(massage([1, 2, 3, 1]));
console.log(massage([2, 7, 9, 3, 1]));
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]));
