var minSubArrayLen = function (s, nums) {
    const totalSum = nums.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    if (totalSum < s) return 0;
    let res = nums.length,
        left = 0,
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= s && left <= i) {
            res = Math.min(res, i - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return res;
};

const res = minSubArrayLen(4, [1, 4, 4]);
console.log("result", res);
