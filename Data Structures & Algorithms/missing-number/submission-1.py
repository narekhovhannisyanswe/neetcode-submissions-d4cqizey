class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        max_number = len(nums) + 1
        expected_sum = int(max_number * (max_number - 1) / 2)
        actual_sum = sum(nums)

        return expected_sum - actual_sum