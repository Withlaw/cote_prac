function solution(s) {
  if (s.length % 2 !== 0) return false;

  /* 
  const stack = [];
  for (const char of s) {
    if(stack.length === 0 && char === ")") return false;
    if(stack.length !== 0 && char !== stack.at(-1)) stack.pop();
    else stack.push(char);
  }
  return stack.length === 0
  
  // 시간 초과
  */

  let stack = 0;
  for (const char of s) {
    if (stack === 0 && char === ")") return false;
    if (stack !== 0 && char === ")") stack--;
    else stack++;
  }

  return stack === 0;
}
