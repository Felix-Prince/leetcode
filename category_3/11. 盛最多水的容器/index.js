/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0,
        h = 0;
    for (let i = 0; i < height.length; i++) {
        let left = i,
            right = i,
            curMax = 0;
        while (left < height.length && right < height.length) {
            h = Math.min(height[left], height[right]);
            curMax = Math.max(curMax, h * (right - left));
            right++;
        }

        max = Math.max(max, curMax);
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));

/**
 * 题解：
 * 这里需要我们计算两个柱子间的最大面积，注意只要 ** 两根 **，因此面积肯定是连续的最大，因为有两个点，所以很容易就想到了通过控制两个指针来计算面积
 * 计算面积我们需要知道两个值；宽和高，宽就是两个指针的距离 right - left
 * 那高呢？
 * 因为面积是连续的，因此我们只要取两个指针中短的那个就是我们的高了
 * 所以这又可以把题目的目的简化成找比左边柱子还低的，如果没有就以左边柱子为高，否则就是右边柱子。
 * 这我们需要记录两个最大面积，一个是右指针移动过程中的最大面积，参考上面第二个输出
 * 另一个最大值就是我们的结果了
 */
