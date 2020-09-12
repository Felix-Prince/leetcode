/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
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
    let res = "";
    while (num != 0) {
        for (let i = 0; i < nums.length; i++) {
            if (num - nums[i] >= 0) {
                num -= nums[i];
                res += roman[i];
                break;
            }
        }
    }
    return res;
};

console.log(intToRoman(process.argv[2]));

/**
 * 题解，贪心算法
 * 因为罗马数字就那么13个，所以直接把这些枚举出来，让一个数字从这些里面找到能减去的最大的数，然后输出这个数对应的罗马数字
 * 直到这个数字减为0位置，输出的结果就是需要的
 */
