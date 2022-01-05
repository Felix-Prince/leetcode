/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let temp = [];
        for (let i = queue.length; i > 0; i--) {
            let node = queue.shift();
            temp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (res.length % 2 == 1) temp.reverse();
        res.push(temp);
    }

    return res;
};
