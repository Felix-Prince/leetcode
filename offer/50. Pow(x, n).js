/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    function quickMul(N) {
        if (N == 0) {
            return 1;
        }
        let y = quickMul(Math.floor(N / 2));
        return N % 2 ? y * y * x : y * y;
    }
    return n >= 0 ? quickMul(n) : 1 / quickMul(-n);
};

console.log(myPow(process.argv[2] || 2, process.argv[3] || 10));
