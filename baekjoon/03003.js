// const item = "3 2 2 2 3 4";
// const input = item.toString().trim().split(" ");
const chess = [1, 1, 2, 2, 2, 8];
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let str = "";
input.map((v, i) => {
  str += chess[i] - v + " ";
});

console.log(str);

// 반복되는 코드를 하드코딩 하지 말고 푸는 방법 생각하기
