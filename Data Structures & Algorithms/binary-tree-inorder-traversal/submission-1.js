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
    inorderTraversal(root) {
        if (!root) return [];

        const res = [];
        const visited = new Set();
        const stack = [root];

        while (stack.length > 0) {
            const cur = stack.pop();
            if (!cur) continue;

            if (visited.has(cur)) {
                res.push(cur.val);
                stack.push(cur.right);
            } else {
                visited.add(cur);
                stack.push(cur)
                stack.push(cur.left);
            }
        }

        return res;
    }
}
