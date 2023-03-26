const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [n, k] = fs.readFileSync(filePath).toString().trim().split(" ");

const sol = (n, k) => {
  const arr = new Array(+n).fill(1).map((el, idx) => el + idx);
  const queue = [];

  let i = 1;
  while (true) {
    if (queue.length === +n) break;
    if (i % +k === 0) queue.push(arr[i - 1]);
    else arr.push(arr[i - 1]);
    i++;
  }
  return queue;
};
// console.log(`<${queue.join(", ")}>`);
console.log(`<${sol(n, k).join(", ")}>`);
