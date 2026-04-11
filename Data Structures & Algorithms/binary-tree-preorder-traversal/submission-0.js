/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        if (!root) return [];

        const res = []
        const stack = [root];

        while (stack.length > 0) {
            const cur = stack.pop();
            if (!cur) continue;

            res.push(cur.val);
            stack.push(cur.right, cur.left);
        }

        return res;
    }
}
