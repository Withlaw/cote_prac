const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input
  .slice(1)
  .filter((_, idx) => idx % 2 === 0)
  .map(el => +el.at(0));
const index = input
  .slice(1)
  .filter((_, idx) => idx % 2 === 0)
  .map(el => +el.at(-1));
const docs = input
  .slice(1)
  .filter((_, idx) => idx % 2 !== 0)
  .map(el => el.split(" ").map(el => +el));

// console.log(
//   n,
//   input.slice(1).filter((_, idx) => idx % 2 !== 0).map(el => Math.max(...el.split(" ")))
// );

console.log(num, index, docs);

// let result = "";
// for (let i = 0; i < input[0]; i++) {
//   const arr = new Array(num[i]).fill().map((el, idx) => idx);
//   const max = Math.max(...docs[i]);
//   const maxidx = docs[i].indexOf(max);
//   const newArr = [...arr.slice(maxidx), ...arr.slice(0, maxidx)];
//   const order = newArr.indexOf(index[i]) + 1;
//   console.log(newArr, order);
// }
