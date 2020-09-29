/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];

    let dfs = (target, combine, idx) => {
        // 当目标值减完时把组合结果放入结果数组
        if (target == 0) {
            res.push(combine);
            return;
        }
        // 表示已经搜索到可选数组最后了
        if (idx >= candidates.length) {
            return;
        }

        // 跳过当前的数字，搜索下一个数字
        dfs(target, combine, idx + 1);

        // 如果目标值减去当前的值还大于 0 ，则继续往下搜索
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    };
    dfs(target, [], 0);

    return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
