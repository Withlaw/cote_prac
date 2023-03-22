function solution(cards1, cards2, goal) {
  const arr1 = [...cards1];
  const arr2 = [...cards2];
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] !== arr1[i] && goal[i] !== arr2[i]) return "No";

    if (goal[i] === arr1[i]) arr2.unshift("");
    else arr1.unshift("");
  }

  return "Yes";
}
