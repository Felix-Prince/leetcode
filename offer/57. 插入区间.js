/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (res.length == 0 || res[res.length - 1][1] < start) {
            res.push([start, end]);
        } else {
            let [s, e] = res.pop();
            res.push([s, Math.max(e, end)]);
        }
    }
    return res;
};

console.log(
    insert(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5]
    )
);

console.log(
    insert(
        [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        [4, 8]
    )
);

console.log(insert([], [5, 7]));
console.log(insert([[1, 5]], [2, 3]));
console.log(insert([[1, 5]], [2, 7]));
