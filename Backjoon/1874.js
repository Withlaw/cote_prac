const [n, ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const stack = [];
let result = "";
let i = 1;
let j = 0;
while (+n >= i || stack.length !== 0) {
  if (stack.at(-1) === +arr[j]) {
    stack.pop();
    result += "-";
    j++;
    continue;
  }

  if (stack.at(-1) > +arr[j]) {
    stack.pop();
    result += "-";
    continue;
  }

  if (i > +arr[j]) break; // 최적화

  stack.push(i);
  result += "+";
  i++;
}

if (+n > j) console.log("NO");
else console.log(result.split("").join("\n"));
