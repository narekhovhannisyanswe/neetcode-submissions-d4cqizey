/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head || !head.next) return head;

        let bc = null;
        let fw = null;

        while (head) {
            fw = head.next;
            head.next = bc;
            bc = head;
            head = fw;
        }

        return bc;

        
    }
}
