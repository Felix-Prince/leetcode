/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return [];
    let m = matrix.length,
        n = matrix[0].length;
    let res = [];
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
