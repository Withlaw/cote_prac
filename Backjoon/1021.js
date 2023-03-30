const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [l, r] = fs.readFileSync(filePath).toString().trim().split("\n");
// [ '10 3', '2 9 5' ]
let deque = new Array(+l.split(" ")[0]).fill(1).map((el, idx) => el + idx);
let result = 0;

const lotate = (arr, direction) => {
  if (direction === "left") {
    return [...arr.slice(1), ...arr.slice(0, 1)];
  }
  if (direction === "right") {
    return [...arr.slice(-1), ...arr.slice(0, -1)];
  }
};

const calcDirection = (arr, num) => {
  const center = Math.floor((arr.length - 1) / 2);
  const idx = arr.indexOf(num);
  return idx > center ? "right" : "left";
};

r.split(" ").forEach(el => {
  el = +el;
  const direction = calcDirection(deque, el);
  while (el - deque[0] !== 0) {
    deque = lotate(deque, direction);
    result++;
  }

  deque.shift();
});

console.log(result);
