/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let operate = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => parseInt(a / b),
    };
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (Number(tokens[i]) || tokens[i] === "0") {
            stack.push(Number(tokens[i]));
        } else {
            let b = stack.pop(),
                a = stack.pop();
            stack.push(operate[tokens[i]](a, b));
        }
    }
    return stack.pop();
};
console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));
console.log(evalRPN(["0", "3", "/"]));
console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ])
);
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
