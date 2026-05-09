class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const trustTbl = {}
        for (let i = 1; i <= n; i++) {
            trustTbl[i] = { trustsTo: 0, trustedBy: 0 }
        }

        for (const [who, whom] of trust) {
            trustTbl[who].trustsTo++
            trustTbl[whom].trustedBy++
        }

        for (const [who, {trustsTo, trustedBy}] of Object.entries(trustTbl)){
            if (trustsTo === 0 && trustedBy === n - 1) return who
        }

        return -1
    }
}
