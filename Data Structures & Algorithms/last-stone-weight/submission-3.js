class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxPQ = new MaxPriorityQueue()

        for (const s of stones) {
            maxPQ.enqueue(s)
        }

        while (maxPQ.size() > 1) {
            const s1 = maxPQ.dequeue()
            const s2 = maxPQ.dequeue()

            if (s1 !== s2) {
                maxPQ.enqueue(s1 - s2)
            }
        }

        return maxPQ.dequeue() ?? 0
    }
}
