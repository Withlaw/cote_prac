const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

/*
let queue = [];
arr.forEach(el => {
  el = el.split(" ");
  switch (el[0]) {
    case "push":
      queue.push(el[1]);
      break;
    case "pop":
      const [first, ...rest] = queue;
      queue = rest;
      console.log(first ?? -1);
      break;
    case "size":
      console.log(queue.length);
      break;
    case "empty":
      console.log(queue.length === 0 ? 1 : 0);
      break;
    case "front":
      console.log(queue[0] ?? -1);
      break;
    case "back":
      console.log(queue[queue.length - 1] ?? -1);
      break;
  }
});

// 시간초과
*/

const queue = {};
let front = 0;
let rear = 0;
let result = "";

arr.forEach(el => {
  el = el.split(" ");
  switch (el[0]) {
    case "push":
      queue[rear] = el[1];
      rear++;
      break;
    case "pop":
      if (queue[front] === undefined) {
        result += "-1 ";
        break;
      }
      result += `${queue[front]} `;
      delete queue[front];
      front++;
      break;
    case "size":
      result += `${rear - front} `;
      break;
    case "empty":
      result += rear - front === 0 ? "1 " : "0 ";
      break;
    case "front":
      result += queue[front] ? `${queue[front]} ` : "-1 ";
      break;
    case "back":
      result += queue[rear - 1] ? `${queue[rear - 1]} ` : "-1 ";
      break;
  }
});

console.log(result.split(" ").join("\n").trim());
