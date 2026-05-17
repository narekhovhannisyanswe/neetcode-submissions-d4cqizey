class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        const drawer = {fives: 0, tens: 0}

        for (const bill of bills) {
            if (bill === 5) {
                drawer.fives++
                continue
            }

            if (bill === 10) {
                if (drawer.fives === 0) {
                    return false
                } else {
                    drawer.fives--
                    drawer.tens++
                    continue
                }
            }

            if (bill === 20) {
                if (drawer.tens > 0 && drawer.fives > 0) {
                    drawer.tens--
                    drawer.fives--
                } else if (drawer.fives >= 3) {
                    drawer.fives -= 3
                } else {
                    return false
                }
            }
        }

        return true
    }
}
