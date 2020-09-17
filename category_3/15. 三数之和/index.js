/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; ) {
        let left = i + 1,
            right = nums.length - 1;
        do {
            let result = nums[i] + nums[left] + nums[right];
            if (result == 0) {
                res.push([nums[i], nums[left], nums[right]]);
            }
            if (result > 0) {
                while (left < right && nums[right] == nums[--right]) {}
            } else {
                while (left < right && nums[left] == nums[++left]) {}
            }
        } while (left < right);

        while (nums[i] == nums[++i]) {}
    }
    return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0, 0]));
console.log(threeSum([-1, 0, 0, 1]));

// https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
