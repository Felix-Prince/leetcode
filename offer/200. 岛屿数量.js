/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    let n = grid.length;
    if (!n) return count;
    let m = grid[0].length;
    function DFS(x, y) {
        // 找边界
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0) {
            return;
        }
        // 把找到的 1 置为 0
        grid[x][y] = 0;
        DFS(x - 1, y); // 向上
        DFS(x + 1, y); // 向下
        DFS(x, y - 1); // 向左
        DFS(x, y + 1); // 向右
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                count++;
                DFS(i, j);
            }
        }
    }
    return count;
};

console.log(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ])
);

console.log(
    numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ])
);
