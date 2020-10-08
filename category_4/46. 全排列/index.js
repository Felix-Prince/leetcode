/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];

    function dfs(nums, ans, len) {
        if (len == 0) {
            res.push([...ans]);
            return;
        }
        for (let i = 0; i < len; i++) {
            ans.push(nums[i]);

            let newData = [...nums];
            newData.splice(i, 1);
            dfs(newData, ans, newData.length);
            ans.pop();
        }
    }

    dfs(nums, [], nums.length);
    return res;
};

console.log(permute([1, 2, 3]));
