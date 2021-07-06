/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    function splitList(start, end) {
        if (!start) return start;
        if (start === end) {
            start.next = null;
            return start;
        }
        let slow = start,
            fast = start;
        while (fast !== end) {
            slow = slow.next;
            fast = fast.next;
            if (fast !== end) {
                fast = fast.next;
            }
        }
        const mid = slow;
        return mergeArr(splitList(start, mid), splitList(mid, end));
    }

    function mergeArr(left, right) {
        let result = new ListNode();
        let temp = result;
        while (left.next && right.next) {
            if (left.val <= right.val) {
                temp.next = left;
                left = left.next;
            } else {
                temp.next = right;
                right = right.next;
            }
            temp = temp.next;
        }
        if (left) {
            temp.next = left;
        } else if (right) {
            temp.next = right;
        }
        return result.next;
    }

    return splitList(head, null);
};
