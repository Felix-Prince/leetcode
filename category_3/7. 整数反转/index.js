/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const k = parseInt(
        Array.from(Math.abs(x) + "")
            .reverse()
            .join("")
    );
    // 2 ** 31 求幂运算符
    if (k < -Math.pow(2, 31) || k > Math.pow(2, 31) - 1) {
        return 0;
    }
    return x < 0 ? -k : k;
};

console.log(reverse(process.argv[2]));
