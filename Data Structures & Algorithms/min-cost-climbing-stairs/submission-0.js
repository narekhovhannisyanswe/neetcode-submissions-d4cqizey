class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let oneStep  = cost[0]
        let twoStep = cost[1]

        for (let i = 2; i < cost.length; ++i) {
            const overhead = Math.min(oneStep, twoStep)
            const curStep = cost[i] + overhead
            oneStep = twoStep
            twoStep = curStep
        }

        return Math.min(oneStep, twoStep)
    }
}
