const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

// 문자열 개수 객체
const obj = {};

for (let char of input) {
  char = char.toUpperCase();
  if (obj[char]) obj[char]++;
  else obj[char] = 1;
}
// console.log(obj);

// 객체 순회
let tempValue = 0,
  tempKey = "";

for (const key in obj) {
  if (!obj[tempKey]) {
    tempKey = key;
    continue;
  }

  if (obj[key] > obj[tempKey]) {
    tempKey = key;
    tempValue = 0;
    continue;
  }

  if (obj[key] === obj[tempKey]) {
    tempValue++;
    continue;
  }
}

if (tempValue > 0) {
  console.log("?");
} else {
  console.log(tempKey);
}
