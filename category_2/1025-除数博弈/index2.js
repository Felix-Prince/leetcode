/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    return fn(N, false);
};

function fn(N, flag) {
    let x = 1;
    while (N > x) {
        if (N % x == 0) {
            return fn(N - x, !flag);
        } else {
            x++;
        }
    }
    return flag;
}

// console.log(process.argv[2]);
console.log(divisorGame(process.argv[2]));
