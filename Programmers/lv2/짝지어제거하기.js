function solution(s) {
  const stack = [];
  s.split("").forEach(el => {
    if (el === stack.at(-1)) stack.pop();
    else stack.push(el);
  });

  return stack.length === 0 ? 1 : 0;
}
