function solution(n, m, section) {
  let result = 0;
  let point = 0;

  for (const part of section) {
    // if (point === 0 || part - point >= m) {
    //   point = part;
    //   result++;
    //   continue;
    // }
    if (point !== 0) continue;
    if (part - point < m) continue;
    point = part;
    result++;
  }

  return result;
}
