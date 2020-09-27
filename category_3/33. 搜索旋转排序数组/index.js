/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 题目要求时间复杂度 O(log n) , 所以可以考虑使用 二分查找的变种
    // return nums.indexOf(target); 时间复杂度 O(n)

    let n = nums.length;
    if (!n) return -1;

    let l = 0,
        r = n - 1;
    while (l <= r) {
        let mid = (l + r) / 2;
        if (nums[mid] == target) return mid;
        if (nums[l] <= nums[mid]) {
            // 左边有序
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
