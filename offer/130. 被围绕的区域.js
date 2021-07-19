/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let n = board.length;
    if (!n) return board;
    let m = board[0].length;
    function DFS(x, y) {
        // 如果超出边界或者值不为 O 的继续下一个
        if (x < 0 || x >= n || y < 0 || y >= m || board[x][y] != "O") {
            return;
        }
        // 把当前位置的值置为某个标识
        board[x][y] = "#";
        // 满足，在边界上且值为 O ，接着查看与其相邻的是否存在 O
        DFS(x - 1, y); // 向上找
        DFS(x + 1, y); // 向下找
        DFS(x, y - 1); // 向左找
        DFS(x, y + 1); // 向右找
    }
    // 先看第一行和最后一行，找到上面是否有边界的 O
    for (let i = 0; i < n; i++) {
        DFS(i, 0);
        DFS(i, m - 1);
    }

    // 第一列和最后一列
    for (let i = 0; i < m; i++) {
        DFS(0, i);
        DFS(n - 1, i);
    }

    // 遍历整个矩阵，替换 # 为 O，替换 O 为 X
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "#") {
                board[i][j] = "O";
                continue;
            }
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }

    return board;
};

console.log(
    solve([
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"],
    ])
);
