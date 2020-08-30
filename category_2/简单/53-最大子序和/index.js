/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) return;
    let maxSum = nums[0],
        preSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        preSum = Math.max(preSum + nums[i], nums[i]);
        maxSum = Math.max(preSum, maxSum);
    }
    return maxSum;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1]));

// 在方法一中我们用一个 dp[] 来维护我们的历史计算结果，但是针对这一题我们只需求一个最大和，因此没必要再去维护一个一维数组，只需通过一个变量来记录前一个值就行
// 这个的时间复杂度还是 O(n) 空间复杂度是 O(1)
