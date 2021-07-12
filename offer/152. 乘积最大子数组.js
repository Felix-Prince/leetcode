/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (!nums.length) return 0;
    // 1. 定义 maxDp[i] 表示以第 i 个元素结尾的乘积最大子数组的乘积, minDp 表示以第 ii 个元素结尾的乘积最小子数组的乘积
    let maxDp = [],
        minDp = [];
    /**
     * 2. 定义推导公式
     *    第 i 个数的时候，取 Math.max(maxDp[i-1] * nums[i],minDp[i - 1] * nums[i], nums[i]) 的最大值
     *    取最小值 Math.min(minDp[i - 1] * nums[i], maxDp[i - 1] * nums[i], nums[i])
     */

    // 3. 定义初始值
    (maxDp[0] = nums[0]), (minDp[0] = nums[0]);

    for (let i = 1; i < nums.length; i++) {
        maxDp[i] = Math.max(
            maxDp[i - 1] * nums[i],
            minDp[i - 1] * nums[i],
            nums[i]
        );
        minDp[i] = Math.min(
            minDp[i - 1] * nums[i],
            maxDp[i - 1] * nums[i],
            nums[i]
        );
    }
    return Math.max(...maxDp);
};

console.log(maxProduct([-2, 3, 3, -4]));
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4]));
