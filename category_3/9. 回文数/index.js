/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let s = x.toString().split("").reverse().join("");
    return s == x.toString();
};

console.log(isPalindrome(process.argv[2]));
