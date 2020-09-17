/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let arr = [];
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            arr.push(nums[j]);
            for (let k = j + 1; k < nums.length; k++) {
                arr.push(nums[k]);
                let sum = arr.reduce((a, b) => a + b);
                if (sum == 0) {
                    res.push(JSON.stringify([...arr]));
                }
                arr.pop();
            }
            arr.pop();
        }
        arr.pop();
    }
    return Array.from(new Set(res)).map((item) => JSON.parse(item));
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0, 0]));

// https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
