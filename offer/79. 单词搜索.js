/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const h = board.length,
        w = board[0].length;
    const dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    const visited = new Array(h);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(w).fill(false);
    }

    function DFS(i, j, s, k) {
        if (board[i][j] !== s.charAt(k)) {
            return false;
        } else if (k == s.length - 1) {
            // 找到单词的最后一个字母
            return true;
        }

        visited[i][j] = true;
        let flag = false;
        for (const [x, y] of dir) {
            let ii = i + x,
                jj = j + y;
            if (ii >= 0 && ii < h && jj >= 0 && jj < w) {
                if (!visited[ii][jj]) {
                    const f = DFS(ii, jj, s, k + 1);
                    if (f) {
                        flag = true;
                    }
                }
            }
        }
        visited[i][j] = false;
        return flag;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = DFS(i, j, word, 0);
            if (flag) {
                return true;
            }
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

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "SEE"
    )
);

console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCB"
    )
);
