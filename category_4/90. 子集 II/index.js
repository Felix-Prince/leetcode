/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    function dfs(idx, ans) {
        res.push([...ans]);
        for (let i = idx; i < nums.length; i++) {
            if (i > idx && nums[i] == nums[i - 1]) {
                continue;
            }

            ans.push(nums[i]);
            dfs(i + 1, ans);
            ans.pop();
        }
    }

    dfs(0, []);

    return res;
};

console.log(subsetsWithDup([1, 2, 2]));
