/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
    // 提取需要的字符
    const result = str.trim().match(/^(-|\+)?\d+/g);
    return result
        ? Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31))
        : 0;
};

console.log(myAtoi("42"));
console.log(myAtoi("       -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
