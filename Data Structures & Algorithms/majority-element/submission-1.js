class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counts = new Map();

        for (const num of nums) {

            if (counts.has(num)) {
                counts.set(num, counts.get(num) + 1);
            } else {
                counts.set(num, 1);
            }

            if (counts.get(num) >= nums.length / 2) {
                return num;
            }
        }
    }
}
