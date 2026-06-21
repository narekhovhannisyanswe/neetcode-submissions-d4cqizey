class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_sublist = {}

        for str in strs:
            sorted_str = "".join(sorted(list(str)))
            if sorted_str in anagrams_sublist:
                anagrams_sublist[sorted_str].append(str)
            else:
                anagrams_sublist[sorted_str] = [str]
                
        return list(anagrams_sublist.values())