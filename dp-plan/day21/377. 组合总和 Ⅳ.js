/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    // 这题其实就是一个排列，可以参考一下这个题解 https://leetcode-cn.com/problems/coin-change-2/solution/ling-qian-dui-huan-iihe-pa-lou-ti-wen-ti-dao-di-yo/
    // 其实就是一个爬楼梯，但是你每一步就是我 nums 里的值之一
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            const step = nums[j];
            if (step > i) continue;
            dp[i] += dp[i - step];
        }
    }
    return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
console.log(combinationSum4([9], 3));
