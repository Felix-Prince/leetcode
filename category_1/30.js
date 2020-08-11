/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s || !words || !words.length) return [];
    let windows = {},
        needs = {},
        oneWordLen = words[0].length;
    for (let w of words) {
        needs[w] ? needs[w]++ : (needs[w] = 1);
    }
    let l = 0,
        r = 0,
        count = 0,
        needsKeyLen = Object.keys(needs).length,
        ans = [];
    // 为什么这里会知循环单个词的长度呢？
    // 因为内层已经减去了一个单词的长度 “aaaaaaaa" ["aa","aa","aa"]
    // 注意因为并不是所有的单词的起始位置正好是在 单词长度的整数被位置
    // 比如： "lingmindraboofooowingdingbarrwingmonkeypoundcake" ["fooo","barr","wing","ding","wing"] 就是在下标 13 的位置
    for (let i = 0; i < oneWordLen; i++) {
        windows = {};
        r = l = i;
        count = 0;
        while (r <= s.length - oneWordLen) {
            let w1 = s.slice(r, r + oneWordLen);
            r += oneWordLen;
            if (!needs[w1]) {
                windows = {};
                l = r;
                count = 0;
                continue;
            }
            windows[w1] ? windows[w1]++ : (windows[w1] = 1);
            if (windows[w1] === needs[w1]) count++;
            while (count === needsKeyLen) {
                if (r - l === oneWordLen * words.length) ans.push(l);
                let w2 = s.slice(l, l + oneWordLen);
                l += oneWordLen;
                if (needs[w2]) {
                    windows[w2]--;
                    if (windows[w2] < needs[w2]) count--;
                }
            }
        }
    }
    return ans;
};

console.log(
    "***********************",
    findSubstring("aaaaaaaa", ["aa", "aa", "aa"])
);
