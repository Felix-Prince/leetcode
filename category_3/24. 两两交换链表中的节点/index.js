/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let p1 = head,
        p2 = head.next;

    p1.next = swapPairs(p2.next);
    p2.next = p1;
    return p2;
};
