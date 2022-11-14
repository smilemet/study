const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString()
const input = fs.readFileSync("input.txt").toString();

let Arr = [];
let ArrSum = 0;

for (let i = 1; i <= input; i++) {
  if (input - ArrSum >= i) {
    Arr.push(i);
    ArrSum += i;
  } else {
    break;
  }
}

console.log(Arr.length);
