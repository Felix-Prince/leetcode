/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [],
        len = s.length;
    if (len == 0) {
        return res;
    }

    function check(str, left, right) {
        while (left < right) {
            if (str[left] != str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    function dfs(s, start, ans) {
        if (start >= len) {
            return res.push([...ans]);
        }

        for (let i = start; i < len; i++) {
            if (!check(s, start, i)) {
                continue;
            }
            ans.push(s.substring(start, i + 1));
            dfs(s, i + 1, [...ans]);
            ans.pop();
        }
    }

    dfs(s, 0, []);

    return res;
};

console.log(partition("aab"));
