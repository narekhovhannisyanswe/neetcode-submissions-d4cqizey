class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 1;
        let r = x;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const sq = m * m;

            if (sq === x) return m;

            if (sq > x) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return r;
    }
}
