class Solution:
    def isHappy(self, n: int) -> bool:
        appeared = set()

        if n == 1:
            return True

        while n != 1:
            cur_sum = self.getSumOfDigitSquares(n)

            if cur_sum == 1:
                return True

            if cur_sum in appeared:
                return False

            appeared.add(cur_sum)
            n = cur_sum

    def getSumOfDigitSquares(self, n):
        sum = 0

        while n > 0:
            digit = n % 10
            sum += digit * digit
            n = (n - digit) // 10

        return sum
