class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        for (let i = nums1.length - 1; i >= n; --i) {
            nums1[i] = nums1[i - n];
        }

        let p1 = n;
        let p2 = 0;

        for (let i = 0; i < nums1.length; ++i) {
            if (p2 >= nums2.length || p1 < nums1.length && nums1[p1] < nums2[p2]) {
                nums1[i] = nums1[p1];
                p1++;
            } else {
                nums1[i] = nums2[p2];
                p2++;
            }
        }

        return nums1;
    }
}
