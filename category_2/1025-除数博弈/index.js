/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    // dp[i] 表示 N 为 i 时，爱丽丝是赢还是输
    // let dp = new Array(N + 1).fill(false);
    let dp = Array.from({ length: +N + 1 }, () => false);
    dp[1] = false;
    dp[2] = true;

    for (let i = 3; i <= N; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                // 以 3 为例，爱丽丝做完 1 后，还剩 2 是留给鲍勃的，所以我们只要看 2 的结果，这里 2 的结果是对于鲍勃来说的，所以对于爱丽丝就是取反
                dp[i] = !dp[i - j];
            }
            // 如果已经是 true 了，就不用在执行后续的操作了，因为这样的操作 爱丽丝已经是赢得了
            if (dp[i]) break;
        }
    }

    return dp[N];
};

console.log(process.argv[2]);
console.log(divisorGame(process.argv[2]));

/**
 * 最少代码 ，归纳法
 * var divisorGame = function (N) {
 *      return N % 2 == 0;
 * };
 */
