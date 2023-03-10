const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
const arr = [1, 1, 2, 2, 2, 8];
const result = input.map((el, idx) => arr[idx] - el).join(" ");

console.log(result);
