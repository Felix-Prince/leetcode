/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = new ListNode(null);
    node.next = head;
    let pre = node,
        beh = node;
    for (let i = 0; i <= n; i++) {
        pre = pre.next;
    }
    while (pre != null) {
        pre = pre.next;
        beh = beh.next;
    }
    beh.next = beh.next.next;
    return node.next;
};
