// /**
//  * @param {number} n
//  * @return {number}
//  */
// var tribonacci = function (n) {
//     // 泰波那契数列定义T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
//     // 由上可的 dp[n] = dp[n-1]+dp[n-2]+dp[n-3] n>=3
//     let dp = new Array(n + 1);
//     (dp[0] = 0), (dp[1] = 1), (dp[2] = 1);

//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//     }

//     // 通过数组的形式来存储数据，空间复杂度是 O(n)，其实这里用到的就四个变量
//     return dp[n];
// };

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    // 通过变量的形式来存储，在空间复杂度上就是 O(1)
    let res = 0,
        num0 = 0,
        num1 = 1,
        num2 = 1;
    if (n === 0) {
        return num0;
    } else if (n === 1 || n === 2) {
        return num1;
    } else {
        for (let i = 3; i <= n; i++) {
            res = num0 + num1 + num2;
            num0 = num1;
            num1 = num2;
            num2 = res;
        }
        return res;
    }
};

console.log(tribonacci(4));
console.log(tribonacci(25));
