class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let curMin = prices[0];

        for (let i = 1; i < prices.length; ++i) {
            if (prices[i] < curMin) {
                curMin = prices[i];
                continue;
            }

            const curProfit = prices[i] - curMin;

            if (curProfit > maxProfit) {
                maxProfit = curProfit;
            }
        }

        return maxProfit;
    }
}
