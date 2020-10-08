/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    function dfs(data, ans, target, index) {
        if (target == 0) {
            res.push(ans);
            return;
        }
        if (index >= data.length) {
            return;
        }

        if (data[index] <= target) {
            let newData = [...data];
            newData.splice(index, 1);
            dfs(newData, [...ans, data[index]], target - data[index], index);
        }

        dfs(data, ans, target, index + 1);
    }

    dfs(candidates, [], target, 0);
    // 未剪枝，所以会有重复的数据，这里通过 Set 来进行去重，有点 hack
    res = res.map((item) => JSON.stringify(item));
    res = Array.from(new Set(res));
    return res.map((item) => JSON.parse(item));
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
