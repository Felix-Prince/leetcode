/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    let cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== cur) {
            cur = nums[i];
        } else {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1]));
console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]));
