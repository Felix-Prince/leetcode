/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join("");
};

console.log(minNumber([10, 2]));
console.log(minNumber([3, 30, 34, 5, 9]));
