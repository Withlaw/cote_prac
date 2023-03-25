const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();

if (input === 1) {
  console.log("");
  return 0;
}
const arr = new Array(+input).fill(1).map((el, idx) => el + idx);

let i = 0;
while (true) {
  if (i === arr.length - 1) {
    console.log(arr[i]);
    return 0;
  }
  if (i % 2 !== 0) arr.push(arr[i]);
  i++;
}
