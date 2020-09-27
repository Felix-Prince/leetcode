/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // 算法时间复杂度必须是 O(log n) 级别。

    if (nums == null || nums.length == 0) return [-1, -1];
    let l = leftIndex(nums, target);
    let r = rightIndex(nums, target);
    return [l, r];
};

function leftIndex(nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = parseInt(l + (r - l) / 2);

        if (nums[mid] == target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    if (l != nums.length && nums[l] == target) {
        return l;
    }
    return -1;
}

function rightIndex(nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = parseInt(l + (r - l) / 2);

        if (nums[mid] == target) {
            l = mid + 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    if (r != -1 && nums[r] == target) {
        return r;
    }
    return -1;
}

console.log(searchRange([3, 3, 3], 3));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
