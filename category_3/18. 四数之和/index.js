/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = [],
        len = nums.length;
    if (len < 4) return res;

    for (let i = 0; i < len - 3; ) {
        for (let j = i + 1; j < len - 2; ) {
            let left = j + 1,
                right = len - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                }
                if (sum > target) {
                    while (left < right && nums[right] == nums[--right]) {}
                } else {
                    while (left < right && nums[left] == nums[++left]) {}
                }
            }
            while (nums[j] == nums[++j]) {}
        }
        while (nums[i] == nums[++i]) {}
    }
    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));

/**
 * 这题的思路参考 三数之和 ，三数之和是第一个数固定，然后两个指针移动，这里四数之和只是比三数多了一层遍历，固定前两个数，然后移动两个指针
 * nums   [1, 0, -1, 0, -2, 2]
 * index   0  1   2  3   4  5
 *
 * 1. 先给 nums 排序，固定前两个数 nums[0] nums[1]
 * 2. left 指针指向 index = 2 ，right 指针指向 index = 5
 * 3. 之后就是通过循环来判断left～right 之间满足 和sum = target 的结果
 * 4. 如果 sum > target 说明右边的值大了，因此 right 向左边移动，如果和原先的值一样继续往左移动（这一步就做到了结果的去重）
 * 5. 如果 sum < target 说明左边的值小了，因此 left 向右移动，如果和原先的值一样继续往右移动（这一步就做到了结果的去重）
 * 6. 当left ～ right  之间已经搜索玩了，再让原先固定的第二个值移动，即现在是 nums[0] + nums[2] + nums[left] + nums[right]
 * 7. 同样的在移动第二个固定节点的时候同样需要判断是否和原先的值相同，不然之后left ～ right 之间的还是会重复
 * 8. 当第二个固定值移动完了，再移动第一个值，原理同上
 */
