/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    // 解析：因为题意说明，同行从左到右递增，同列从上到下递增，因此从左下角到右上角这个对角线作为分割线
    // 比这个对角线上小的往上找，比这个对角线上大的往右下找
    // 首先从左下角的数 x 开始，与目标值 target 比较，如果target < x，那么我们往上查找就行，如果比 x 大，我们往右查找
    if (!matrix.length) {
        return false;
    }
    let n = matrix.length,
        m = matrix[0].length;

    let i = n - 1,
        j = 0;
    while (i >= 0 && i < n && j >= 0 && j < m) {
        let x = matrix[i][j];
        if (x < target) {
            j++;
        } else if (x > target) {
            i--;
        } else {
            return true;
        }
    }
    return false;
};

console.log(
    findNumberIn2DArray(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ],
        5
    )
);

console.log(
    findNumberIn2DArray(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ],
        20
    )
);
