/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let [m, n] = [board.length, board[0].length];

    function DFS(i, j, idx) {
        if (i < 0 || i >= m || j < 0 || j > n || board[i][j] !== word[idx])
            return false;
        if (idx === word.length - 1) return true;
        const temp = board[i][j];

        board[i][j] = "";
        const res =
            DFS(i + 1, j, idx + 1) ||
            DFS(i, j + 1, idx + 1) ||
            DFS(i - 1, j, idx + 1) ||
            DFS(i, j - 1, idx + 1);
        board[i][j] = temp;
        return res;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (DFS(i, j, 0)) return true;
        }
    }
    return false;
};

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCCED"
    )
);
