class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1: string, str2: string): string {
        const l1 = str1.length
        const l2 = str2.length

        for (let i = Math.min(l1, l2); i > 0; --i) {
            if (l1 % i === 0 && l2 % i === 0) {
                const subStr = str1.slice(0, i)
                if (
                    subStr.repeat(l1 / i) === str1 && 
                    subStr.repeat(l2 / i) === str2
                ) {
                    return subStr
                }
            }
        }

        return ''
    }
}
