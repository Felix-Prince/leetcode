/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`));
    if (Number(nums.join("")) == 0) return "0";
    return nums.join("");
};

console.log(largestNumber([0, 0]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
