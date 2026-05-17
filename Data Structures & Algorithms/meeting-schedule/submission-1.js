/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((i1, i2) => i1.start - i2.start)
        
        for (let i = 1; i < intervals.length; ++i) {
            const curInteraval = intervals[i]
            const prevInterval = intervals[i - 1]

            if (curInteraval.start < prevInterval.end) {
                return false
            }
        }

        return true
    }
}
