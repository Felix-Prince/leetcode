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
    if (!head.next && n == 1) return null;
    let pre = new ListNode(null);
    let beh = new ListNode(null);
    pre.next = head;
    beh.next = head;

    let count = 0;
    while (pre.next) {
        pre = pre.next;
        if (count == n) {
            beh = beh.next;
        } else {
            count++;
        }
        if (!pre.next) break;
    }
    if (beh.val == null) {
        head = head.next;
    } else {
        beh.next = beh.next.next;
    }
    return head;
};
