/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let len = gas.length;
    for (let i = 0; i < len; i++) {
        let next = (i + 1) % len,
            current = gas[i],
            pre = i;
        while (i != next && current - cost[pre] > 0) {
            current = current - cost[pre] + gas[next];
            pre = next;
            next = (next + 1) % len;
        }
        if (i == next && current - cost[pre] >= 0) return i;
    }
    return -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
console.log(
    canCompleteCircuit(
        [1, 2, 3, 4, 3, 2, 4, 1, 5, 3, 2, 4],
        [1, 1, 1, 3, 2, 4, 3, 6, 7, 4, 3, 1]
    )
);
console.log(canCompleteCircuit([4, 5, 3, 1, 4], [5, 4, 3, 4, 2]));
