/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // 统计出现次数
    const map = {};
    for (const n of nums) {
        n in map || (map[n] = 0);
        map[n]++;
    }

    const list = Object.entries(map);
    quickSelect(list, k, 0, list.length - 1, function (item, pivot) {
        return item[1] >= pivot[1];
    });

    return list.slice(0, k).map((el) => el[0]);
};

/**
 * 把 arr[r] 当成是 pivot
 * 把大于等于 pivot 的数字放到左边
 * 把小于 pivot 的数字放到右边
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function partition(arr, l, r, comparator) {
    if (typeof comparator != "function") {
        comparator = function (num, pivot) {
            return num >= pivot;
        };
    }

    let i = l;
    for (let j = l; j < r; j++) {
        if (comparator(arr[j], arr[r])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    // 将 pivot 换到分界点
    [arr[i], arr[r]] = [arr[r], arr[i]];
    // 返回 pivot 的下标
    return i;
}

/**
 * 寻找第 k 大元素
 * 如果 pivot 的下标刚好是 k - 1，那我们就找到了
 * 如果下标大于 k - 1，那就在 [left, pivotIndex - 1] 这段找第 k 大元素
 * 如果下标小于 k - 1，那就对 [pivotIndex + 1, right] 这段找第 k - pivotIndex + left - 1 大元素
 * @param {number[]} list
 * @param {number} left
 * @param {number} right
 * @param {number} k
 * @param {function} comparator
 */
function quickSelect(list, k, left = 0, right = list.length - 1, comparator) {
    if (left >= right) return list[left];
    const pivotIndex = partition(list, left, right, comparator);

    if (pivotIndex - left === k - 1) return list[pivotIndex];
    else if (pivotIndex - left > k - 1)
        return quickSelect(list, k, left, pivotIndex - 1, comparator);
    else
        return quickSelect(
            list,
            k - pivotIndex + left - 1,
            pivotIndex + 1,
            right,
            comparator
        );
}

console.log(topKFrequent([4, 2, 2, 3, 3, 3, 1, 1, 1, 1], 2));
