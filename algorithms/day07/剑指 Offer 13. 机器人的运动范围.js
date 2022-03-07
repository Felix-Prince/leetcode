/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let visited = Array(m)
        .fill(0)
        .map((_) => Array(n).fill(false));
    function DFS(x, y) {
        if (
            sum(x) + sum(y) > k ||
            x < 0 ||
            x >= m ||
            y < 0 ||
            y >= n ||
            visited[x][y]
        ) {
            return 0;
        }
        visited[x][y] = true;

        return 1 + DFS(x + 1, y) + DFS(x, y + 1);
    }

    return DFS(0, 0);
};

function sum(x) {
    let s = 0;
    while (x > 0) {
        s += x % 10;
        x = Math.floor(x / 10);
    }
    return s;
}

console.log(movingCount(2, 3, 1));
console.log(movingCount(3, 1, 0));
console.log(movingCount(3, 2, 17));
