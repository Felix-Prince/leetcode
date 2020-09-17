/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let sum = 0;
    while (s.length > 0) {
        for (let i = 0; i < roman.length; i++) {
            const element = roman[i];
            if (s.startsWith(element)) {
                sum += nums[i];
                s = s.replace(element, "");
                break;
            }
        }
    }
    return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
