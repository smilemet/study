const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = fs.readFileSync("예제.txt").toString().split("\r\n");

let [N, K] = input[0].split(" ").map((v) => Number(v));
input.shift();
const Arr = input.sort((a, b) => b - a).map((v) => Number(v));

let count = 0;

for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] === 0) break;
  if (K === 0) break;
  if (K < Arr[i]) continue;
  count += Math.floor(K / Arr[i]);
  K = K % Arr[i];
}

console.log(count);
