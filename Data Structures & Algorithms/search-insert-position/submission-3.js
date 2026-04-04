class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0; 
        let r = nums.length - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            console.log('mid', mid)

            if (nums[mid] === target) return mid;

            if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }

        return nums[r] > target ? r : r + 1;
    }
}
