/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
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
    merge([
        [1, 3],
        [2, 6],
        [15, 18],
        [8, 10],
    ])
);
console.log(
    merge([
        [1, 4],
        [4, 5],
    ])
);
