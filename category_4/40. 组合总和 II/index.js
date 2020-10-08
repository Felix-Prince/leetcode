/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    function dfs(candidates, len, begin, target, ans, res) {
        if (target == 0) {
            res.push([...ans]);
            return;
        }

        for (let i = begin; i < len; i++) {
            if (target - candidates[i] < 0) {
                break;
            }
            if (i > begin && candidates[i] == candidates[i - 1]) {
                continue;
            }
            ans.push(candidates[i]);
            dfs(candidates, len, i + 1, target - candidates[i], ans, res);
            ans.pop();
        }
    }

    dfs(candidates, candidates.length, 0, target, [], res);

    return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
