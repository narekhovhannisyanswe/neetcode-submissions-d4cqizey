class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  subsetXORSum(nums) {
    let sums = []

    for (let i = 0; i < nums.length; ++i) {
      const sumsLength = sums.length
      for (let j = 0; j < sumsLength; ++j) {
        sums.push(sums[j] ^ nums[i])
      }
      sums.push(nums[i])
      console.log(sums)
    }

    const totalSum = sums.reduce((tSum, el) => tSum + el, 0)

    return totalSum
  }
}
