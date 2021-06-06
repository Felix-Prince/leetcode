/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    // 前序的第一个值就是这个树的根节点
    const root = new TreeNode(preorder[0]);
    for (let i = 0; i < preorder.length; i++) {
        // 因为数值无重复的，所以中序中对应根节点的值正好分割左右子树
        if (inorder[i] === preorder[0]) {
            const pre_left = preorder.slice(1, i + 1);
            const pre_right = preorder.slice(i + 1);
            const in_left = inorder.slice(0, i);
            const in_right = inorder.slice(i + 1);
            root.left = buildTree(pre_left, in_left);
            root.right = buildTree(pre_right, in_right);
            break;
        }
    }
    return root;
};
