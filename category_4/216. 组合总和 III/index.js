/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];

    function getSum(arr) {
        return arr.reduce((p, c) => p + c);
    }

    function dfs(ans, start) {
        if (ans.length == k && getSum(ans) == n) {
            return res.push([...ans]);
        }

        for (let i = start; i <= 9; i++) {
            if (ans.includes(i)) break;
            ans.push(i);
            dfs([...ans], start + 1);
            ans.pop();
        }
    }
    dfs([], 1);

    return res;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
