function solution(id_list, report, k) {
  const offense = {}; //신고한 사람
  const defense = {}; //신고 받은 사람

  report.forEach(el => {
    const [off, def] = el.split(" ");

    if (offense[off]?.includes(def)) return; // 동일 신고 중복

    if (offense[off] === undefined) offense[off] = []; // 초기값
    else offense[off].push(def); // 신고자 목록 추가

    if (defense[def] === undefined) defense[def] = []; // 초기값
    else defense[def].push(off); // 피신고자 목록 추가
  });
  return id_list.map(el => {
    if (offense[el] === undefined) return 0;
    else
      return offense[el].reduce(
        (acc, cur) => (defense[cur].length >= k ? acc + 1 : acc),
        0
      );
  });
}
