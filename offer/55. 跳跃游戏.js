/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    //  1. 定义 dp[i]，表示能否到达第 i 位
    if (!nums.length) return false;
    let dp = new Array(nums.length).fill(false);
    /**
     * 2. 推导关系式
     * 首先我们想到的是，是不是只要 nums[i] > j 就行了呢
     * 试着推导一下
     * 第一次 i = 0, j = 1, nums[i] = 2 > j, 能到
     * 第二次 i = 1, j = 2, nums[i] = 3 > j, 能到
     * 第三次 i = 2, j = 3, nums[i] = 1 < j, 不能到，但是根据我们的实际来看是能到达的，因此表明 nums[i] > j 不成立
     * 这里需要注意的点是，下标是在增长的，因此不能光只比较 nums[i], 因此我们已经到达了 i 表明我们的起点现在是 i
     * 所以公式 nums[i] + i > j
     */

    // 3. 定义初始值
    dp[0] = true;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            // 能到达 i，并且 i + nums[i] 能到达 j
            if (dp[i] && nums[i] + i >= j) {
                dp[j] = true;
                break;
            }
        }
    }
    return dp[nums.length - 1];
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
