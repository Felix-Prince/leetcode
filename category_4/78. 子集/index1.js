/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 结果数组的长度，例如当有3个数字时，结果的长度是 8 => 2 的 3 次方
    let length = 1 << nums.length;
    let res = [];

    for (let i = 0; i < length; i++) {
        let ans = [];
        for (let j = 0; j < nums.length; j++) {
            // 判断 i 的第 j 位是否是 1
            /**
             * 例如 i = 2 （010）
             *    j = 0  i >> j & 1 = 0
             *    j = 1  i >> j & 1 = 1
             * .....
             */
            if (((i >> j) & 1) == 1) {
                ans.push(nums[j]);
            }
        }
        res.push([...ans]);
    }
    return res;
};

// 位运算解法参考 https://leetcode-cn.com/problems/subsets/solution/hui-su-wei-yun-suan-di-gui-deng-gong-4chong-fang-s/

console.log(subsets([1, 2, 3]));
console.log(subsets([3, 4, 5, 1]));
