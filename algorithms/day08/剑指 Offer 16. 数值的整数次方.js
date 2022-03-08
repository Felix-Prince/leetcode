/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
    let res = myPow(x, n >> 1);
    // 比如要求2^10, 我只要算出 2^5 然后让 2^5 * 2^5 => 2^(5+5) 就是结果了
    res *= res;
    // 用位与运算代替求余运算符来判断一个数是不是奇数还是偶数
    if ((n & 1) == 1) {
        res *= x;
    }
    return res;
};

console.log(myPow(2.0, -2147483648));

// console.log(myPow(2, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2, -2));
