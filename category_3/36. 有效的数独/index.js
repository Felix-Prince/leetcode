/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let boxs = Array(9).fill(0);
    let rows = Array(9).fill(0);
    let columns = Array(9).fill(0);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let key = board[i][j];
            let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
            if (key == ".") continue;
            if (rows[i][key] || columns[j][key] || boxs[boxIndex][key])
                return false;
            rows[i] = { ...rows[i], [key]: 1 };
            columns[j] = { ...columns[j], [key]: 1 };
            boxs[boxIndex] = { ...boxs[boxIndex], [key]: 1 };
        }
    }
    return true;
};
console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
// console.log(
//     isValidSudoku([
//         ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//         ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//         [".", "9", "8", ".", ".", ".", ".", "6", "."],
//         ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//         ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//         [".", "6", ".", ".", ".", ".", "2", "8", "."],
//         [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//         [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
// );
// console.log(
//     isValidSudoku([
//         ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//         ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//         [".", "9", "8", ".", ".", ".", ".", "6", "."],
//         ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//         ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//         [".", "6", ".", ".", ".", ".", "2", "8", "."],
//         [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//         [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
// );
// console.log(
//     isValidSudoku([
//         ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//         ["6", ".", "3", "1", "9", "5", ".", ".", "."],
//         [".", "9", "8", ".", ".", ".", ".", "6", "."],
//         ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//         ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//         [".", "6", ".", ".", ".", ".", "2", "8", "."],
//         [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//         [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
// );
