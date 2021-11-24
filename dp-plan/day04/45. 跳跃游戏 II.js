/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // 1. dp[i] 表示跳到 i 的最小步数
    /**
     * 2. 定义推导公式
     * 要到达当前位置 i 需要保证 前面的节点j + 前面节点j能跳的最大长度 >= i
     * 由此可推导出 dp[i] = Math.min(dp[i], dp[j]+1)
     */

    let len = nums.length;
    let dp = new Array(len).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[len - 1];
};

console.log(jump([2, 3, 1, 1, 4]));
