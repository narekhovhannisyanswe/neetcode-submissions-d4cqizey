class Solution {
  /**
   * @param {string[]} words
   * @param {string} order
   * @return {boolean}
   */
  isAlienSorted(words, order) {
    for (let i = 0; i < words.length - 1; ++i) {
        const w1 = words[i]
        const w2 = words[i + 1]

        if (w1.startsWith(w2) && w1 !== w2) return false

        for (let j = 0; j < w1.length; ++j) {
            if (order.indexOf(w1[j]) >  order.indexOf(w2[j])) return false

            if (order.indexOf(w1[j]) <  order.indexOf(w2[j])) break
        }
    }

    return true;
  }
}
