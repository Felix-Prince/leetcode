/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [];

    function dfs(idx, ans, deep) {
        if (deep == k) {
            res.push([...ans]);
            return;
        }

        for (let i = idx; i <= n; i++) {
            ans.push(i);
            dfs(i + 1, [...ans], deep + 1);
            ans.pop();
        }
    }

    dfs(1, [], 0);

    return res;
};

/**
 * 题解：
 * 在 n 个数中取 k 个数的组合，把遍历的结果画一棵树，我们就能发现，k 就是我们画的树的深度，因此我们就知道了回溯结束的条件，深度 == k
 * 的时候就是表示当前回溯结束了
 *
 */

console.log(combine(4, 2));
console.log(combine(5, 3));
