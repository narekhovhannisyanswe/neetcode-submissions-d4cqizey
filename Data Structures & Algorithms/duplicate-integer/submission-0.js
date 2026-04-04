class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countMap = new Map();

        for (const n of nums) {
            if (countMap.has(n)) {
                return true;
            } else {
                countMap.set(n, true);
            }
        }

        return false;
    }
}
