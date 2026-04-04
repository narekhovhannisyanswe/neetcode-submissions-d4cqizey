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
        function inOrderTraversal(node) {
            if (!node) return [];

            return [...inOrderTraversal(node.left), node.val, ...inOrderTraversal(node.right)]
        }

        return inOrderTraversal(root);
    }
}
