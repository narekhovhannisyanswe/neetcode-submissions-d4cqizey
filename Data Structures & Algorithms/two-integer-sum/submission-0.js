class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = new Map();

        for (let i = 0; i < nums.length; ++i) {
            const diff = target - nums[i];
            if (diffMap.has(diff)) {
                return [i, diffMap.get(diff)]
            } else {
                diffMap.set(nums[i], i);
            }
        }

        return [0, 0];
    }
}
