function solution(s) {
  let prev = s;
  let next = "";
  let count = 0;
  let countZero = 0;

  while (prev.length > 1) {
    next = prev.split("0").join("");
    count++;
    countZero += prev.length - next.length;
    prev = next.length.toString(2);
  }

  return [count, countZero];
}
