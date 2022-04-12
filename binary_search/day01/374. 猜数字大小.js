/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1,
        right = n;
    while (left < right) {
        // 循环直至区间左右端点相同
        const mid = Math.floor(left + (right - left) / 2);
        if (guess(mid) <= 0) {
            right = mid; // 答案在区间 [left, mid] 中
        } else {
            left = mid + 1; // 答案在区间 [mid+1, right] 中
        }
    }
    // 此时有 left == right，区间缩为一个点，即为答案
    return left;
};

console.log(guessNumber(10));
console.log(guessNumber(1));
console.log(guessNumber(2));
