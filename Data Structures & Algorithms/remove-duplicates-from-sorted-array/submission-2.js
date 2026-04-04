class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = 0;

        while (r < nums.length) {
            nums[l] = nums[r];

            while (nums[r] === nums[l]) {
                r++;
            }

            l++;
        }

        return l;
    }
}
