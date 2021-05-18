/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    /**
     * 题解：1.左右对称翻转
     *      2. 以左下到右上的线为轴对称翻转
     * */
    let length = matrix.length;
    let middle = length % 2 ? length / 2 : length / 2 - 1;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j <= middle; j++) {
            let temp = matrix[i][length - j - 1];
            matrix[i][length - j - 1] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            let temp = matrix[length - j - 1][length - i - 1];
            matrix[length - j - 1][length - i - 1] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    return matrix;
};

// console.log(
//     rotate([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ])
// );

console.log(
    rotate([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ])
);
