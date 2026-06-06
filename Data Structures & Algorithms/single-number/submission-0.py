class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0

        for (_, num) in enumerate(nums):
            result ^= num

        return result