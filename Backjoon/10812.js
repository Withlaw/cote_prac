const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const inputArr = input.map(el => el.split(" ").map(el => +el));
const basket = new Array(inputArr[0][0]).fill(1).map((el, idx) => el + idx);
const methods = inputArr.slice(1);

const devide = (arr, begin, end) => {
  return arr.slice(begin - 1, end);
};

const rotate = (devidedBasket, mid) => {
  const left = devidedBasket.slice(0, mid - 1);
  const right = devidedBasket.slice(mid - 1);
  // console.log("l: ", left, "r: ", right);
  return [...right, ...left];
};

const combine = (rotatedBasket, begin) => {
  for (let i = 0; i < rotatedBasket.length; i++) {
    basket[begin - 1] = rotatedBasket[i];
    begin++;
  }
};

methods.forEach(el => {
  const [begin, end, mid] = el;
  const devidedBasket = devide(basket, begin, end);
  const rotatedBasket = rotate(devidedBasket, mid - begin + 1);
  combine(rotatedBasket, begin);
  // console.log(basket);
});

/*
const prac = (arr, i) => {
  console.log(arr);
  let [begin, end, mid] = methods[i];
  const devidedBasket = devide(arr, begin, end);
  const rotatedBasket = rotate(devidedBasket, mid - begin + 1);
  // combine
  let j = begin;
  for (let i = 0; i < rotatedBasket.length; i++) {
    arr[j - 1] = rotatedBasket[i];
    j++;
  }
  console.log(begin, end, mid, devidedBasket, rotatedBasket, arr);
};
prac([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
// prac([4, 5, 6, 1, 2, 3, 7, 8, 9, 10], 1);
*/

console.log(basket.join(" "));
