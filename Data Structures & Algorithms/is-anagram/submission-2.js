class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sCount = new Map();
        const tCount = new Map();
        for (const l of s) {
            if (sCount.has(l)) sCount.set(l, sCount.get(l) + 1)
            else sCount.set(l, 1);
            // tCount.set(tCount.getOrInsert(l, 1) + 1)
        }

        for (const l of t) {
            if (tCount.has(l)) tCount.set(l, tCount.get(l) + 1)
            else tCount.set(l, 1);
            // tCount.set(tCount.getOrInsert(l, 1) + 1)
        }

        if (sCount.size !== tCount.size) return false;

        for (const [key, val] of sCount) {
            if (val !== tCount.get(key)) return false;
        }

        return true;
    }
}
