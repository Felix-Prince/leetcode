/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [],
        n = nums.length;

    function dfs(idx, ans, tartgetDeep, curDeep) {
        if (tartgetDeep == curDeep) {
            res.push([...ans]);
            return;
        }

        for (let i = idx; i < nums.length; i++) {
            ans.push(nums[i]);
            dfs(i + 1, ans, tartgetDeep, curDeep + 1);
            ans.pop();
        }
    }

    for (let i = 0; i <= n; i++) {
        if (i == n) {
            res.push([...nums]);
            break;
        }
        dfs(0, [], i, 0);
    }

    return res;
};

/**
 * 题解：
 * 这题和 77. 组合的思路是一样的
 * 这里求子集，那么就是说 77题中的 k 是变化的，k 的范围是 [0, nums.length]
 * 所以这里的目标深度就是我们子集设置的，当目标深度和当前的深度一致时就是结束回溯的时候，把结果存储就行
 *
 */

console.log(subsets([1, 2, 3]));
console.log(subsets([3, 4, 5, 1]));
