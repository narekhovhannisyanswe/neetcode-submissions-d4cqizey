class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a,b) => a - b)
            const s1 = stones.pop()
            const s2 = stones.pop()
            if (s1 !== s2) {
                stones.push(s1 - s2)
            }
        }

        return stones[0] || 0
    }
}
