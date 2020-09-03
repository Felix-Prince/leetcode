/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let m = Math.abs(dividend),
        n = Math.abs(divisor);
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    if (m === 2147483648) {
        return sign == 1 ? m - 1 : -m;
    }

    if (m === 2147483648 && n === 1) {
        // 避免结果溢出
        return sign ? m / n - 1 : -m / n;
    }
    if (n == 1) return sign == 1 ? m : -m;
    let res = 0;
    while (m >= n) {
        let x = n,
            p = 1;
        while (m >= x << 1) {
            x <<= 1;
            p <<= 1;
        }
        res += p;
        m -= x;
    }
    return sign == 1 ? res : -res;
};

console.log(divide(10, 3));
console.log(divide(7, -3));

/**
 *
 * 思路
 * 除法的商就是可以从被除数中减去除数的次数而不使其为负的次数。下以成倍次数增加除数并从被除数中减去已经增加的除数次数。比如15 / 3，首先从等于当前除数开始，如果除数左移一位（即增长一倍为6）小
 * 于被除数，则除数左移一位同时用变量p记录除数增长倍数，接着除数在左移一位（即增长一倍为12）小于被除数，则除数左移一位同时p记录除数增长倍数（p左移一位，即表示增长4倍），除数再左移一位（即增长
 * 为24）大于15，则停止内循环，然后从被除数中减去当前除数，同时将增长倍数4加到结果集中，再进行外循环（15 - 12 = 3 >= 3）,重复上述过程，当前可以继续左移一位，所以最终结果为3 + 1 = 4。
 */
