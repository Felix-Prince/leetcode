/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // 因为 nums 的值是 1~n 内的，假设重复的值为 target ，那就右 【1， target-1] 是与 下标 i (为 1~n )是一致的，即 1 的数量是 1，2 的数量是 2
    // 注意上面这个举例是 target > 2 的情况
    // 以第一个案例来说就是 ，小于 2 的值与 i 一致，大于等于2的数量大于 i
    let n = nums.length;
    let l = 1,
        r = n - 1,
        res = null;
    while (l <= r) {
        // 为什么不用 除 2？ 因为还得取整，位运算就省了取整的操作
        let mid = (l + r) >> 1;
        let count = 0;
        for (let i = 0; i < n; i++) {
            count += nums[i] <= mid;
        }
        // 如果count 小于等于 mid 表示 处于 [1, target-1] 这个区间
        // 所以我们需要往右的区间取找值，所以 l 值为 mid+1，r 保持不变
        if (count <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            // 考虑 mid 正好是临界值的情况
            res = mid;
        }
    }

    return res;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
