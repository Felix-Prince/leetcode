/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    helper(root, res, 0);
    return res;
};

function helper(root, res, level) {
    // 如果没有节点的时候我们就返回我们的结果
    if (!root) return res;
    // 为每一层生成一个数组存放
    if (!res[level]) {
        res[level] = [];
    }
    // 以 level 为下标存放每层的值
    res[level].push(root.val);
    // 查看左节点，这里注意 level 别用 level++ 的形式，不然还得再增加 level-- 的语句
    helper(root.left, res, level + 1);
    helper(root.right, res, level + 1);
}
