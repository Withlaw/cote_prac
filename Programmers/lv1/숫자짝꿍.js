function solution(X, Y) {
  const obj = {};
  const result = [];
  for (char of X) {
    obj[char] = obj[char] === undefined ? 1 : obj[char] + 1;
  }

  for (char of Y) {
    if (!obj[char]) continue;
    result.push(char);
    obj[char]--;
  }
  if (result.length === 0) return "-1";

  const resultSorted = result.sort((a, b) => b - a).join("");
  return resultSorted[0] === "0" ? "0" : resultSorted;
}
