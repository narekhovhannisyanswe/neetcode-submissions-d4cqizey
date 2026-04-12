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
     * @return {number}
     */
    maxDepth(root) {
        function bfs(node, depth) {
            if (!node) return depth - 1;

            return Math.max(bfs(node.left, depth + 1), bfs(node.right, depth + 1))
        }

        if (!root) return 0;

        return bfs(root, 1);
    }
}
