const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const stack = [];

arr.forEach((el, idx) => {
  if (+el === 0) {
    if (stack.length === 0) return;
    stack.pop();
  } else {
    stack.push(+el);
  }
});

console.log(stack.reduce((acc, cur) => acc + cur));
