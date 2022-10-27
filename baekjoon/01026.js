const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, Astr, Bstr] = fs.readFileSync("예제.txt").toString().split("\r\n");
let B = Bstr.split(" ");
let A = Astr.split(" ");

let answer = 0;

B.sort((a, b) => a - b);
A.sort((a, b) => b - a);

A.forEach((a, i) => (answer += a * B[i]));

console.log(answer);
