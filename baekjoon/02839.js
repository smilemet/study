const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const [N] = fs.readFileSync("예제.txt").toString().split("\r\n");

if (N % 5 === 0) {
  console.log(N / 5);
  return;
}

for (let i = 1; i <= Math.floor(N / 3); i++) {
  let newNum = N - 3 * i;

  if (newNum % 5 === 0) {
    console.log(i + newNum / 5);
    return;
  }
}

console.log(-1);
