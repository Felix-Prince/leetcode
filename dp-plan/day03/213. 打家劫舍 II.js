/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 1. dp[i] 偷取第 i 间房的时候的最高金额
    /**
     * 2. 推导公式
     * 因为房间是成环的，当房间数大于2 时，偷了第一间就不能偷最后一间，偷了最后一间，第一间就不能偷了
     * 这样我们就可以分成两种情况来看，分别是范围[0,len-2] 和 [1,len-1]
     * dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
     */
    // 3. 定义初始值

    function robRange(start, end) {
        let first = nums[start],
            second = Math.max(nums[start + 1], nums[start]);
        for (let i = start + 2; i <= end; i++) {
            const temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
    let len = nums.length;
    if (len === 1) return nums[0];
    else if (len == 2) {
        return Math.max(...nums);
    }

    return Math.max(robRange(0, len - 2), robRange(1, len - 1));
};

console.log(rob([1, 3, 1, 3, 100]));
console.log(rob([200, 3, 140, 20, 10]));
console.log(rob([1, 2, 1, 1]));
console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));
console.log(rob([0]));
