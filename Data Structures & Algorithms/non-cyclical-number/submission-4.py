class Solution:
    def isHappy(self, n: int) -> bool:
        appeared = set()

        while n != 1:
            n = sum(int(d) ** 2 for d in str(n))
            if n in appeared:
                return False
            appeared.add(n)
        
        return True
