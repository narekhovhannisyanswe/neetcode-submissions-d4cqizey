class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length < 2) return nums.length;

        let k = 1;

        for (let i = 1; i < nums.length; ++i) {
            if (nums[i] > nums[i - 1]) continue;

            while (
                k < nums.length &&
                nums[k] <= nums[i - 1] ||
                k <= i
            ) {
                // console.log(k)
                k++;
            }

            if (k === nums.length) return i;

            if (nums[i] <= nums[i - 1]) {
                console.log('nums[i]', nums[i])
                console.log('nums[i-1]', nums[i-1])
                console.log('changing')
                nums[i] = nums[k];
            } 

        }

        return nums.length;
    }
}
