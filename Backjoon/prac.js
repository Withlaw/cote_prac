const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

const [l, r] = input;
let result;

+l > +r && (result = ">");
+l < +r && (result = "<");
+l === +r && (result = "==");

console.log(result, input);
