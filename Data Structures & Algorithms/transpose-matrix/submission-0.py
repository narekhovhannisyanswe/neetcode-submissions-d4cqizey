class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        transposed = []
        for _ in range(len(matrix[0])):
            transposed.append([])

        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                transposed[j].append(matrix[i][j])


        return transposed
        