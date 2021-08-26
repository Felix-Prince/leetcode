/**
@param {number[]} nums
@param {number} k
@return {number[]}
*/
var topKFrequent = function (nums, k) {
    let hashmap = {};
    for (const num of nums) {
        hashmap[num] == undefined ? (hashmap[num] = 1) : hashmap[num]++;
    }
    return Object.keys(hashmap)
        .sort((a, b) => hashmap[b] - hashmap[a])
        .slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
