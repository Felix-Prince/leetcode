/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [],
        flag = true;
    for (let i = 0; i < s.length; i++) {
        if (!flag) return false;
        switch (s[i]) {
            case "(":
            case "[":
            case "{":
                stack.push(s[i]);
                break;
            case ")":
                flag = stack.pop() == "(";
                break;
            case "]":
                flag = stack.pop() == "[";
                break;
            case "}":
                flag = stack.pop() == "{";
                break;
            default:
                break;
        }
    }
    return flag && stack.length == 0;
};

console.log(isValid("["));
