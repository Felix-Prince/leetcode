/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    if (s.length < k) return 0;
    let mp = new Map();
    for (let i = 0; i < s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) || 0) + 1);
    }

    for (const c of mp.keys()) {
        if (mp.get(c) < k) {
            let res = 0;
            for (let t of s.split(c)) {
                res = Math.max(res, longestSubstring(t, k));
            }
            return res;
        }
    }
    return s.length;
};
// 参考：https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/solution/jie-ben-ti-bang-zhu-da-jia-li-jie-di-gui-obla/

console.log(longestSubstring("ababbc", 2));
