//// 미헤결

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const inputArr = [];
input.forEach((el, idx, arr) => {
  if (el[0] !== "R" && el[0] !== "D") return;
  inputArr.push(arr.slice(idx, idx + 3));
});

let result = "";

inputArr.forEach(el => {
  const [testCase, arrLength, arr] = el;

  // 에러
  // const countD = testCase.split("").filter(el => el === "D").length;
  // if (countD > +arrLength) {
  //   result += "error ";
  //   return;
  // }
  const testCaseStrD = testCase.split("R").join("");
  if (testCaseStrD.length > +arrLength) {
    result += "error ";
    return;
  }

  // const testCaseStr = testCase.split("RR").join("");
  // const deque = arr.slice(1, -1).split(",");

  // for (let i = 0; i < testCaseStr.length; i++) {
  //   testCaseStr[i] === "R" && deque.reverse();
  //   testCaseStr[i] === "D" && deque.shift();
  // }

  const testCaseStrR = testCase.split("D").join("");

  // const deque = arr.slice(1, -(testCaseStrD.length + 1)).split(",");
  // if (testCaseStrR % 2 !== 0) deque.reverse();

  result += `[${deque}] `;
});

console.log(result.split(" ").join("\n").trim());
