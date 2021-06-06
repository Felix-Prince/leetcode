/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let maxLen = 0;
    let newArr = new Set(nums);

    for (const item of newArr) {
        if (!newArr.has(item - 1)) {
            let current = item,
                len = 1;
            while (newArr.has(current + 1)) {
                len++;
                current++;
            }
            maxLen = Math.max(len, maxLen);
        }
    }

    return maxLen;
};

console.log(longestConsecutive([1, 2, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
