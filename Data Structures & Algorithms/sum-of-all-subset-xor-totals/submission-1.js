class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  subsetXORSum(nums) {
    const dfs = (i, total) => {
      if (i === nums.length) return total

      return dfs(i + 1, total) + dfs(i + 1, total ^ nums[i])
    }

    return dfs(0, 0)
  }
}
