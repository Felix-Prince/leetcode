/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let res = 0,
        max = values[0] + 0;
    for (let i = 1; i < values.length; i++) {
        res = Math.max(res, max + values[i] - i);
        max = Math.max(max, values[i] + i);
    }
    return res;
};

// /**
//  * @param {number[]} values
//  * @return {number}
//  */
// var maxScoreSightseeingPair = function (values) {
//     let len = values.length;
//     let max = Number.MIN_VALUE;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             max = Math.max(max, values[i] + values[j] + i - j);
//         }
//     }
//     return max;
// };

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 2]));
