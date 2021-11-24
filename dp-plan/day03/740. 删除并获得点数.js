// 题解 https://leetcode-cn.com/problems/delete-and-earn/solution/zhe-xiao-tou-you-lai-qiang-jie-liao-ta-z-w29x/
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const rob = (n) => {
        const size = n.length;
        if (size === 1) {
            return n[0];
        }

        let [first, second] = [n[0], Math.max(n[0], n[1])];
        for (let i = 2; i < size; i++) {
            [first, second] = [second, Math.max(first + n[i], second)];
        }
        return second;
    };

    const len = nums.length;
    let res = 0;
    nums.sort((a, b) => a - b);
    total = [nums[0]];

    for (let i = 1; i < len; i++) {
        let val = nums[i];
        if (val === nums[i - 1]) {
            total[total.length - 1] += val;
        } else if (val === nums[i - 1] + 1) {
            total.push(val);
        } else {
            res += rob(total);
            total = [val];
        }
    }
    res += rob(total);
    return res;
};

console.log(deleteAndEarn([2, 2, 4, 3, 3, 6, 7])); // expect 15
