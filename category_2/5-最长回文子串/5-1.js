// 最长回文子串
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var ss = Array.from(new Set(s.split("")));
    if (ss.length == 1) return s;
    let res = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            const subStr = s.substring(j, i + 1);
            // const revStr = subStr.split("").reverse().join("");
            if (isString(subStr)) {
                res = res.length > subStr.length ? res : subStr;
            }
        }
    }
    return res;
};
function isString(str) {
    var len = str.length;
    var middle = parseInt(len / 2);
    for (var i = 0; i < middle; i++) {
        if (str[i] != str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
