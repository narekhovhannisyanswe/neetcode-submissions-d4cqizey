class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for (let i = 0; i < prices.length - 1; ++i) {
            for (let j = i + 1; j < prices.length; ++j) {
                const curProfit = prices[j] - prices[i];

                if (curProfit > maxProfit)  {
                    maxProfit = curProfit;
                }
            }
        }

        return maxProfit;
    }
}
