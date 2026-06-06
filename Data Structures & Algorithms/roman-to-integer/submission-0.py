class Solution:
    def romanToInt(self, s: str) -> int:
        number = 0

        mapping = {
            'I': 1,
            'IV': 4,
            'V': 5,
            'IX': 9,
            'X': 10,
            'XL': 40,
            'L': 50,
            'XC': 90,
            'C': 100,
            'CD': 400,
            'D': 500,
            'CM': 900,
            'M': 1000
        }

        i = 0

        while i < len(s):
            if s[i:i+2] in mapping:
                number += mapping[s[i:i+2]]
                i = i + 2
                continue

            if s[i:i+1] in mapping:
                number += mapping[s[i:i+1]]
                i = i + 1
                continue

            i += 1


        return number