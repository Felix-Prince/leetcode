/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let res = "1";
    if (n === 1) return res;
    for (let i = 1; i < n; i++) {
        let word = res[0],
            count = 1,
            temp = "";
        for (let j = 1; j < res.length; j++) {
            if (res[j] === word) {
                count++;
            } else {
                temp += `${count}${word}`;
                word = res[j];
                count = 1;
            }
        }
        temp += `${count}${word}`;
        res = temp;
    }
    return res;
};

console.log(countAndSay(process.argv[2] || 5));
