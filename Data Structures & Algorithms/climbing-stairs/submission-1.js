class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 3) return n

        let oneStep = 1
        let twoStep = 2

        for (let s = 3; s <= n; ++s) {
            const nextStep = oneStep + twoStep
            oneStep = twoStep
            twoStep = nextStep
        }

        return twoStep
    }
}
