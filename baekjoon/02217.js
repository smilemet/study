const fs = require("fs");
const [N, ...Rope] = fs.readFileSync("/dev/stdin").toString().split("\n");
let answer = "";

let sortedRope = Rope.sort((a, b) => b - a);

for (let i = 0; i < sortedRope.length; i++) {
  answer = Math.max(answer, sortedRope[i] * (i + 1));
}

console.log(answer);
