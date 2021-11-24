/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = dp[0],
        sum = dp[0];

    // 最大子数组和在中间
    for (let i = 1; i < nums.length; i++) {
        // 整个数组的和，用于之后减去最小子数组和
        sum += nums[i];
        dp[i] = Math.max(dp[i - 1], 0) + nums[i];
        max = Math.max(dp[i], max);
    }

    // 成环
    let min = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        dp[i] = nums[i] + Math.min(0, dp[i - 1]);
        min = Math.min(dp[i], min);
    }
    return Math.max(sum - min, max);
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));

/**
 * 根据题解可知：
 *   环形子数组的最大和具有两种可能，一种是不使用环的情况，另一种是使用环的情况
 *      不使用环的情况时，直接通过53题的思路，逐步求出整个数组中的最大子序和即可
 *     【重点】使用到了环，则必定包含 A[n-1]和 A[0]两个元素且说明从A[1]到A[n-2]这个子数组中必定包含负数
 *     【否则只通过一趟最大子序和就可以的=得出结果】
 *   因此只需要把A[1]-A[n-2]间这些负数的最小和求出来
 *   用整个数组的和 sum减掉这个负数最小和即可实现原环型数组的最大和
 *   最后再比较直接通过53题思路求出无环子序列和用sum-min的有环子序列比较大小求出整个数组的最大值即可！
 */
