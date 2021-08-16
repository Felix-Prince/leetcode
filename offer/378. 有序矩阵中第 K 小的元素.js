/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    const check = (mid) => {
        let i = n - 1,
            j = 0,
            num = 0;
        while (i >= 0 && j < n) {
            if (matrix[i][j] <= mid) {
                num += i + 1;
                j++;
            } else {
                i--;
            }
        }
        return num >= k;
    };
    let left = matrix[0][0],
        right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(
    kthSmallest(
        [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15],
        ],
        8
    )
);
console.log(kthSmallest([[-5]], 1));
