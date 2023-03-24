# 입력 값 받는 법

## **fs모듈**

```javascript
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");

// 1. 하나의 값을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split(" ");

// 3. 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

/*
6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
  ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
*/
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n + 1);
const [m, ...m_arr] = input.slice(n + 1);

// * 만약 입력받는 값들을 모두 String에서 Number로 타입을 변형하려면 split() 뒤에 map(v => +v) 또는 map(Number)를 추가
```

### **readline모듈**

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // 입출력 인터페이스 객체 rl 생성

// 1. 한 줄 입력
rl.on("line", function (line) {
  // 입력받은 값은 line에 저장된다
  console.log(line);

  rl.close(); //close가 없으면 입력이 끝나지 않는다
}).on("close", function () {
  // 입력이 끝난 후 수행할 코드 입력
  process.exit();
});

// 2. 여러 줄 입력
rl.on("line", function (line) {
  input.push(line);
  // rl.close()가 없어서 입력을 종료시킬 때는 ctrl+c 단축키를 이용하면 된다
}).on("close", function () {
  console.log(input);
  process.exit();
});
```
