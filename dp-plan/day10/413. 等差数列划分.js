/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let len = nums.length;
    if (len < 3) return 0;
    // 1. dp[i] 表示以nums[i]结尾的等差数列个数
    /**
     * 2. 定义推导公式
     * a. nums[i] - nums[i-1] = nums[i-1] - nums[i-2],那么说明构成了等差数列，这时候 dp[i-1] 表示的是以 nums[i-1] 结尾的构成等差数列的
     * 个数，现在以 nums[i] 同样构成了等差数列，由此可得 dp[i] = dp[i-1]+1
     * b. nums[i] - nums[i-1] != nums[i-1] - nums[i-2],说明不构成等差数列，所以 dp[i] = 0,即不能以 nums[i] 结尾构成等差数列
     */

    // 3. 定义初始值
    let dp = new Array(len).fill(0);

    for (let i = 2; i < len; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1;
        }
    }
    return dp.reduce((pre, cur) => pre + cur, 0);
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1]));
