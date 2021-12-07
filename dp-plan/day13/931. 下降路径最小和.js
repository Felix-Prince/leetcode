/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let len = matrix.length;
    for (let r = len - 2; r >= 0; r--) {
        for (let c = 0; c < len; c++) {
            let temp = matrix[r + 1][c];
            if (c > 0) {
                temp = Math.min(temp, matrix[r + 1][c - 1]);
            }
            if (c + 1 < len) {
                temp = Math.min(temp, matrix[r + 1][c + 1]);
            }
            matrix[r][c] += temp;
        }
    }
    return Math.min(...matrix[0]);
};

console.log(
    minFallingPathSum([
        [2, 1, 3],
        [6, 5, 4],
        [7, 8, 9],
    ])
);
console.log(
    minFallingPathSum([
        [-19, 57],
        [-40, -5],
    ])
);
