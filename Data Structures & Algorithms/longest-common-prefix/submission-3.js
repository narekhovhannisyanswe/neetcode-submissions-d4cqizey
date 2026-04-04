class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const minLen = Math.min(...strs.map(s => s.length))

        for (let i = 0; i < minLen; ++i) {
            for (let j = 1; j < strs.length; ++j) {
                if (strs[j][i] !== strs[j-1][i]) {
                    return strs[j].slice(0, i);
                }
            }
        }

        return strs[0].slice(0, minLen)
    }
}
