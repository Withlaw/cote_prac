function solution(keymap, targets) {
  const keymapObj = {};
  keymap.forEach(key => {
    key.split("").forEach((char, idx) => {
      if (!keymapObj[char]) keymapObj[char] = idx + 1;
      else
        keymapObj[char] = idx + 1 < keymapObj[char] ? idx + 1 : keymapObj[char];
    });
  });

  return targets.map(el => {
    const sum = el.split("").reduce((acc, cur) => {
      if (keymapObj[cur] === undefined) return NaN;
      return acc + keymapObj[cur];
    }, 0);
    return isNaN(sum) ? -1 : sum;
  });
}
