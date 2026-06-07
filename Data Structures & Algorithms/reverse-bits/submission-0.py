class Solution:
    def reverseBits(self, n: int) -> int:
        n_binary = format(n, 'b')
        n_binar_32_bit = n_binary.rjust(32, '0')
        return int(n_binar_32_bit[::-1], 2)