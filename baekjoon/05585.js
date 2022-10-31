const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString()
const input = fs.readFileSync("input.txt").toString();

const change = [500, 100, 50, 10, 5, 1];
let answer = 0;

let num = 1000 - input;

for (let i = 0; i < change.length; i++) {
  if (num === 0) return console.log(answer);
  if (num >= change[i]) {
    answer += Math.floor(num / change[i]);
    num = num % change[i];
  }
}

console.log(answer);
