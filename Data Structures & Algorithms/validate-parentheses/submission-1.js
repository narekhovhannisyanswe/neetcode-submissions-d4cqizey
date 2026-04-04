class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) return true;

        const bracketPairs = new Map([[')', '('],['}', '{'],[']', '[']]);
        const progress = [];

        for (const cur of s) {
            if (!bracketPairs.has(cur)) { // bracket is opening
                progress.push(cur);
                continue;
            }

            if (progress.length === 0) return false;

            const last = progress.pop();

            if (bracketPairs.get(cur) !== last) { // type hasn't matched
                return false;
            }
        }

        return progress.length === 0;
    }
}
