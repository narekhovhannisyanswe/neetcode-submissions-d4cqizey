class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    cache = [0, 1, 1]

    tribonacci(n) {
        if (this.cache[n] !== undefined) return this.cache[n]

        const res = this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3)
        this.cache[n] = res

        return res
    }
}
