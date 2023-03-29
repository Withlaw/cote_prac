const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const deque = {};
let front = 0;
let back = 1;
let result = "";

arr.forEach(el => {
  el = el.split(" ");
  switch (el[0]) {
    case "push_front":
      deque[front] = el[1];
      front--;
      break;
    case "push_back":
      deque[back] = el[1];
      back++;
      break;
    case "pop_front":
      if (!deque[front + 1]) {
        result += "-1 ";
        break;
      }
      result += deque[front + 1] + " ";
      delete deque[front + 1];
      front++;
      break;
    case "pop_back":
      if (!deque[back - 1]) {
        result += "-1 ";
        break;
      }
      result += deque[back - 1] + " ";
      delete deque[back - 1];
      back--;
      break;
    case "size":
      result += `${back - front - 1} `;
      break;
    case "empty":
      result += back - front - 1 === 0 ? "1 " : "0 ";
      break;
    case "front":
      result += deque[front + 1] ? `${deque[front + 1]} ` : "-1 ";
      break;
    case "back":
      result += deque[back - 1] ? `${deque[back - 1]} ` : "-1 ";
      break;
  }
});

console.log(result.split(" ").join("\n").trim());
