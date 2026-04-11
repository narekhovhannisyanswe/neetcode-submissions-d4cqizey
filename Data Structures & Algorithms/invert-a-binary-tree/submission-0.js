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
     * @return {TreeNode}
     */
    invertTree(root) {
        const q = [root];

        while (q.length > 0) {
            const l = q.length;

            for (let i = 0; i < l; ++i) {
                const cur = q.shift();
                if (!cur) continue;

                [cur.left, cur.right] = [cur.right, cur.left];

                q.push(cur.left, cur.right);
            }
        }

        return root;
    }
}
