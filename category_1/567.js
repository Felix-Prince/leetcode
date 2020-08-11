/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let len = s1.length;
    let sort1 = s1.split("").sort().toString();
    for (let right = 0; right <= s2.length - len; right++) {
        let subStr = s2.substr(right, len);
        if (sort1 === subStr.split("").sort().toString()) {
            return true;
        }
    }
    return false;
};

const res = checkInclusion("adc", "dcda");
console.log("result", res);
