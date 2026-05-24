class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1: string, str2: string): string {
        const l1 = str1.length;
        const l2 = str2.length;

        for (let i = Math.min(l1, l2); i > 0; --i) {
            if (!this.isCommonDivisor(l1, l2, i)) continue;

            const subStr = str1.slice(0, i);
            if (this.isCommonSubstring(str1, str2, subStr)) {
                return subStr;
            }
        }

        return "";
    }

    isCommonDivisor(num1, num2, divisor) {
        return num1 % divisor === 0 && num2 % divisor === 0;
    }

    isCommonSubstring(str1, str2, subStr) {
        const l1 = str1.length;
        const l2 = str2.length;
        const subStrLen = subStr.length;
        return subStr.repeat(l1 / subStrLen) === str1 && subStr.repeat(l2 / subStrLen) === str2;
    }
}
