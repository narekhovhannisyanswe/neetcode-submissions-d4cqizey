class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [l, r] = [0, s.length - 1];

        while (l < r) {
            if (/[^a-zA-Z0-9]/.test(s[l])) {
                l++;
                continue;
            }

            if (/[^a-zA-Z0-9]/.test(s[r])) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }
}
