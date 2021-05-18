/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法1
// var sortColors = function (nums) {
//     let p = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             let temp = nums[p];
//             nums[p] = nums[i];
//             nums[i] = temp;
//             p++;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             let temp = nums[p];
//             nums[p] = nums[i];
//             nums[i] = temp;
//             p++;
//         }
//     }
//     return nums;
// };

// 方法2
var sortColors = function (nums) {
    let p1 = 0,
        p2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            let temp = nums[p2];
            nums[p2] = nums[i];
            nums[i] = temp;
            p2++;
        } else if (nums[i] === 0) {
            let temp = nums[p1];
            nums[p1] = nums[i];
            nums[i] = temp;
            if (p1 < p2) {
                let temp = nums[i];
                nums[i] = nums[p2];
                nums[p2] = temp;
            }
            p1++;
            p2++;
        }
    }
    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
