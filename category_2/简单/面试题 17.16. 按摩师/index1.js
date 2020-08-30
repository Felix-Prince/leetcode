/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
    if (!nums.length) return 0;
    if (nums.length == 1) return nums[0];
    // 1. dp[i] 表示接受当前预约时的最长总预约时间
    let dp = [];

    /**
     * 2. 确定推导公式
     */

    // 3. 定义 dp 初始值
    dp[0] = nums[0];
    dp[1] = nums[1];

    for (let i = 2; i < nums.length; i++) {
        let max = 0;
        for (let j = 0; j < i - 1; j++) {
            max = Math.max(max, dp[j]);
        }
        dp[i] = max + nums[i];
    }
    return Math.max(...dp);
};

console.log(massage([1, 2, 3, 1]));
console.log(massage([2, 7, 9, 3, 1]));
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]));
