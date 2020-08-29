/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => 0)
    );

    let i = 0,
        j = 0,
        count = 1,
        dir = 0; // 0-right,1-down,2-left,3-up
    while (i < n && count <= Math.pow(n, 2)) {
        while (j < n && i < n && j >= 0 && !arr[i][j]) {
            arr[i][j] = count;
            if (dir == 0) {
                j++;
            } else if (dir == 1) {
                i++;
            } else if (dir == 2) {
                j--;
            } else {
                i--;
            }
            count++;
        }
        if (dir == 3 && arr[i][j] != 0) {
            dir = 0;
            i++;
            j++;
        }
        if (dir == 2 && (j == -1 || arr[i][j + 1] != 0)) {
            dir = 3;
            j++;
            i--;
        }
        if (dir == 1 && (i == n || arr[i][j] != 0)) {
            dir = 2;
            i--;
            j--;
        }
        if (dir == 0 && (j == n || arr[i][j] != 0)) {
            dir = 1;
            j--;
            i++;
        }
    }
    return arr;
};

/**
 * 题解
 * 这题的主要思路就是控制好方向，判断边界
 * 1. 右边界：j == n 以及 4
 * 2. 下边界：i == n 以及 4
 * 3. 左边界：i == 0 以及 4
 * 4. 数字边界：arr[i][j] != 0
 *
 * 上面的代码其实有很多冗余的地方，还有一些判断是不必要的
 */

console.log(generateMatrix(process.argv[2]));
