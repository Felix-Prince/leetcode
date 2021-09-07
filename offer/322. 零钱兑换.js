/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (coins.length == 0) return -1;
    // memo[n]的值： 表示的凑成总金额为n所需的最少的硬币个数
    let memo = Array.from({ length: amount + 1 }).fill(0);

    for (let i = 1; i <= amount; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0 && memo[i - coins[j]] < min) {
                min = memo[i - coins[j]] + 1;
            }
        }
        memo[i] = min;
    }
    return memo[amount] == Number.MAX_VALUE ? -1 : memo[amount];
};
// 记忆搜索
// var coinChange = function (coins, amount) {
//     if (coins.length == 0) return -1;
//     // memo[n] 表示钱币n可以被换取的最少的硬币数，不能换取就为-1
//     let memo = Array.from({ length: amount + 1 }).fill(0);

//     function dfs(mount) {
//         if (mount < 0) {
//             return -1;
//         }
//         if (mount == 0) {
//             return 0;
//         }

//         if (memo[mount - 1] !== 0) {
//             return memo[mount - 1];
//         }

//         let min = Number.MAX_VALUE;
//         for (let i = 0; i < coins.length; i++) {
//             let res = dfs(mount - coins[i]);

//             if (res >= 0 && res < min) {
//                 min = res + 1;
//             }
//         }
//         memo[mount - 1] = min === Number.MAX_VALUE ? -1 : min;
//         return memo[mount - 1];
//     }

//     return dfs(amount);
// };

// 递归解法
// var coinChange = function (coins, amount) {
//     let res = Number.MAX_VALUE;
//     if (coins.length == 0) return -1;

//     function dfs(mount, count) {
//         if (mount < 0) {
//             return;
//         }
//         if (mount == 0) {
//             res = Math.min(res, count);
//         }

//         for (let i = 0; i < coins.length; i++) {
//             dfs(mount - coins[i], count + 1);
//         }
//     }

//     dfs(amount, 0);
//     return res === Number.MAX_VALUE ? -1 : res;
// };

console.log(coinChange([1, 2, 5], 11));
