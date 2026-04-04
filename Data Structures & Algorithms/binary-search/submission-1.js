class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let [l, r] = [0, nums.length - 1];

        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);

            if (nums[m] === target) return m;

            if (nums[m] > target) r = m - 1;
            else l = m + 1;
        }
        
        return -1;
    }
}
