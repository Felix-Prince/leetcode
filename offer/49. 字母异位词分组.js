/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = [];

    function sortStr(str) {
        return str.split("").sort().join("");
    }

    for (let i = 0; i < strs.length; i++) {
        if (strs[i] == "|") continue;
        let ans = [];
        ans.push(strs[i]);
        const element = sortStr(strs[i]);
        for (let j = i + 1; j < strs.length; j++) {
            if (strs[j] == "|") continue;
            if (
                (element === sortStr(strs[j]) && !ans.includes(strs[j])) ||
                strs[i] === strs[j]
            ) {
                ans.push(strs[j]);
                strs[j] = "|";
            }
        }
        res.push(ans);
    }
    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", ""]));
