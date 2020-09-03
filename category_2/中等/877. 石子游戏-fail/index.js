/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    // 1. dp[i] 表示第 i 次时，亚力克斯取的数
    let len = piles.length / 2;
    let sum = 0;

    let total = piles.reduce((acc, current) => acc + current);
    /**
     * 2. 推导关系式
     *      因为只能去开始或结束位置的石子，所以对于亚力克斯来说当然式越多越好因此需要判断较大的那堆 Math.max(arr.shift(),a.pop())
     *      如果两个相等，就比较去掉这两个后的子数组，比如 [5，7，4，5] ,我们只需比较[7,4]
     *      取好后与之前取的加起来比较两人的数哪个大
     * dp[0] = Math.max(piles.shift(),piles.pop())
     */

    //  3. 定义初始值

    for (let i = 0; i < len; i++) {}
    return sum > total / 2;
};

console.log(stoneGame([5, 3, 4, 5]));
console.log(stoneGame([5, 7, 4, 5]));
