const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// const isValid = ps => {
//   //   (()())((()))
//   const stack = [];
//   for (const char of ps) {
//     if (stack.length === 0) {
//       if (char === ")") return false;
//       stack.push(char);
//       continue;
//     }

//     if (char === stack.at(-1)) {
//       stack.push(char);
//     } else {
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// };

// arr
//   .map(el => (el.length % 2 === 1 ? "NO" : isValid(el) ? "YES" : "NO"))
//   .forEach(el => console.log(el));

arr.forEach(ps => {
  if (ps.length % 2 === 1) {
    console.log("NO");
    return 0;
  }
  const stack = [];

  for (const char of ps) {
    if (stack.length === 0) {
      if (char === ")") {
        console.log("NO");
        return 0;
      }
      stack.push(char);
      continue;
    }

    if (char === stack.at(-1)) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  if (stack.length === 0) console.log("YES");
  else console.log("NO");
});
