/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    DFS(n, n, "");

    function DFS(left, right, curStr) {
        if (left == 0 && right == 0) {
            res.push(curStr);
            return;
        }
        if (left > 0) {
            DFS(left - 1, right, curStr + "(");
        }
        if (right > left) {
            DFS(left, right - 1, curStr + ")");
        }
    }
    return res;
};

console.log(generateParenthesis(process.argv[2]));
