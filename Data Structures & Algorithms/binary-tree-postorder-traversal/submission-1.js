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
    postorderTraversal(root) {
        if (!root) return [];

        const res = [];
        const visited = new Set();
        const stack = [root];

        while (stack.length) {
            const cur = stack.pop();
            if (!cur) continue;

            if (visited.has(cur)) {
                res.push(cur.val);
            } else {
                stack.push(cur, cur.right, cur.left);
                visited.add(cur);
            }
        }

        return res;
    }
}
