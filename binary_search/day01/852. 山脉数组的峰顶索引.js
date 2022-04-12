/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    // Note: 通过二分，找到一个值，这个值比他左右两边都大
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        let l = Math.max(mid - 1, 0),
            r = Math.min(arr.length, mid + 1);
        if (arr[mid] >= arr[l] && arr[mid] >= arr[r]) {
            return mid;
        }
        // Note：上坡
        if (arr[mid] > arr[l] && arr[mid] < arr[r]) {
            left = r;
        }
        // Note: 下坡
        if (arr[mid] < arr[l] && arr[mid] > arr[r]) {
            right = mid;
        }
    }
    return right;
};

console.log(peakIndexInMountainArray([2, 1, 0]));
console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]));
console.log(peakIndexInMountainArray([0, 1, 2]));
console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([3, 4, 5, 1]));
console.log(
    peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
);
