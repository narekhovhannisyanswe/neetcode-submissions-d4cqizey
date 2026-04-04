class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const letters = Array(26).fill(0, 0, 26);
        
        for (let i = 0; i < s.length; ++i) {
            const ind = s.charCodeAt(i) - 97

            if (ind < 0 || ind >= 26) return false;

            letters[ind]++;
        }

        for (let i = 0; i < t.length; ++i) {
            const ind = t.charCodeAt(i) - 97;

            if (ind < 0 || ind >= 26) return false;

            letters[ind]--;
        }

        return letters.every(val => val === 0);
    }
}
