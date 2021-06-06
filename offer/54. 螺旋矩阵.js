/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return [];
    let m = matrix.length,
        n = matrix[0].length;
    let res = [],
        len = m * n,
        i = 0,
        j = 0;
    let direct = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ],
        directIndex = 0;
    for (let x = 0; x < len; x++) {
        res[x] = matrix[i][j];
        matrix[i][j] = null;
        let nextI = i + direct[directIndex][0],
            nextJ = j + direct[directIndex][1];
        if (
            nextI < 0 ||
            nextI >= m ||
            nextJ < 0 ||
            nextJ > n ||
            !matrix[nextI][nextJ]
        ) {
            directIndex = (directIndex + 1) % 4;
        }
        i += direct[directIndex][0];
        j += direct[directIndex][1];
    }
    return res;
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
