/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = Array(numRows).fill(""),
        index = -1,
        flag = false;

    for (let i = 0; i < s.length; i++) {
        const chat = s[i];

        if (!flag) {
            index = Math.min(++index, numRows - 1);
            res[index] += chat;
        } else {
            index = Math.max(--index, 0);
            res[index] += chat;
        }
        if (index == numRows - 1 || (flag && index == 0)) {
            flag = !flag;
        }
    }

    return res.join("");
};

// console.log(convert("ABC", 1));
console.log(convert("PAYPALISHIRING", 3));
// console.log(convert("LEETCODEISHIRING", 4));
