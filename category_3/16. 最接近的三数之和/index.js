/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = Number.MAX_VALUE;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([1, 1, 1, 0], -100));
