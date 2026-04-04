class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];

        for (const op of operations) {
            switch (op) {
                case '+':
                    record.push(Number(record.at(-1)) + Number(record.at(-2)));
                    break;
                case 'D':
                    record.push(Number(record.at(-1)) * 2);
                    break;
                case 'C':
                    record.pop();
                    break;
                default:
                    record.push(Number(op));
            }
        }

        return record.reduce((total, cur) => total + cur, 0);
    }
}
