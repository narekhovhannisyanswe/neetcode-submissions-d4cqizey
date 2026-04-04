class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        let canSkip = true;

        while (l < r) {
            if (s[l] === s[r]) {
                l++;
                r--;
                continue;
            } 

            console.log(l, r, canSkip)
            if (!canSkip) return false;
            
            if (s[l] === s[r - 1] && s[l+1] === s[r - 2]) {
                l++;
                r -= 2;
                canSkip = false;
            } else if (s[l + 1] === s[r]) {
                l += 2;
                r--;
                canSkip = false;
            } else {
                return false;
            }
        }

        return true;
    }
}
