class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let curMin = prices[0];

        for (const price of prices) {
            maxProfit = Math.max(maxProfit, price - curMin);
            curMin = Math.min(curMin, price);
        }

        return maxProfit;
    }
}
