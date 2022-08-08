const item = `472\n385`;
const input = item.toString().trim().split(`\n`);
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(`\n`);

const [A, B] = input;
let answer = 0;
for (let i = B.length - 1; i > -1; i--) {
  console.log(A * B[i]);
}
console.log(A * B);
