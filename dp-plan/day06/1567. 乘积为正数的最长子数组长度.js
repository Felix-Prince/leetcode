/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
    /**
     * 题解：
     *    存在如下两种情况，都是正数相乘，一正一负相乘都会导致结果是正整数
     * 因此我们可以维护两个数组，positive 和 negative 分别表示到第 i 位时，结果是正整数的最大长度
     * 初始时，如果nums[0] > 0 则 positive[0] = 1,如果是 nums[0] < 0, negative[0] = 1
     * nums[i] > 0,则 positive[i] = positive[i-1]+1  i>=1; negative[i] = negative[i] + 1
     * 特殊情况，如果 negative[i-1] = 0，表示无法形成一个正整数数组
     *
     * nums[i] < 0,这时候 positive[i] = negative[i-1]+1, 因为会改变结果，所以是从 negative 数组中取值，
     * negative[i] = positive[i-1]+1
     *
     *
     * nums[i] = 0,positive[i] = 0,negative[i] = 0
     *
     */

    let len = nums.length;
    let positive = new Array(len).fill(0),
        negative = new Array(len).fill(0);

    if (nums[0] > 0) {
        positive[0] = 1;
    } else if (nums[0] < 0) {
        negative[0] = 1;
    }

    let maxLen = positive[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] > 0) {
            positive[i] = positive[i - 1] + 1;
            negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
        } else if (nums[i] < 0) {
            positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
            negative[i] = positive[i - 1] + 1;
        } else {
            positive[i] = 0;
            negative[i] = 0;
        }

        maxLen = Math.max(maxLen, positive[i]);
    }
    return maxLen;
};

console.log(getMaxLen([-1, -2, -3, 0, 1]));
console.log(getMaxLen([1, -2, 3, 4]));
console.log(getMaxLen([0, 1, -2, -3, -4]));
