/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
    // pre_2 表示当前的前面第二个
    let pre_2 = 0,
        max = 0;
    for (let i = 0; i < nums.length; i++) {
        // pre_1 表示前一个
        const pre_1 = max;
        max = Math.max(pre_2 + nums[i], max);
        pre_2 = pre_1;
    }
    return max;
};

console.log(massage([1, 2, 3, 1]));
console.log(massage([2, 7, 9, 3, 1]));
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]));
