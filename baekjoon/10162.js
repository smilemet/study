const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString()
const input = fs.readFileSync("input.txt").toString();
let answer = [];

const Button = [300, 60, 10];

let num = input;

if (num % 10 !== 0) return console.log(-1);

Button.some((b) => {
  if (num >= b) {
    answer.push(Math.floor(num / b));
    num = num % b;
  } else {
    answer.push(0);
  }
});

const [A, B, C] = answer;

console.log(A, B, C);
