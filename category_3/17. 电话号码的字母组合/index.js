/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return [];
    let dataMap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    let queue = [""];
    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        let len = queue.length;
        for (let j = 0; j < len; j++) {
            let tmp = queue.shift();
            for (let k = 0; k < dataMap[digit].length; k++) {
                let char = dataMap[digit][k];
                queue.push(tmp + char);
            }
        }
    }
    return queue;
};

console.log(letterCombinations("23"));
