/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length < 2) {
        return s;
    }
    let start = 0,
        maxLen = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left, right) => {
        while (left >= 0 && right < n && s[left] == s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    };
    for (let i = 0; i < n; i++) {
        centerExpend(i, i);
        centerExpend(i, i + 1);
    }
    return s.substring(start, start + maxLen);
};

console.log(longestPalindrome("abbacdb"));
console.log(longestPalindrome("abbbba"));
