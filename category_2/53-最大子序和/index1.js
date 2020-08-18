/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) return;
    let dp = [];

    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }

    dp.sort((a, b) => b - a);

    return dp[0];
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 1. 定义 dp[i] ，表示到 nums[i] 的位置时的最大和，假设 i = 2,即0、1、2，三个值的和
// 2. 找到关系，因为是到第 i 个，因此可以分解为 nums[i] + sum(i-1) ,但是要求最大值，因此就是 max(nums[i] + sum(i-1), nums[i])
// 3. 定义初始值, 这个就很好理解了，累加到 i，因此累加到 0，的时候就是我们的初始值了

// 上面的代码还可以优化，上面的 空间复杂度是 O(n) 时间复杂度也是 O(n)
