/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            return [hashMap[nums[i]], i];
        }
        hashMap[target - nums[i]] = i;
    }
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
