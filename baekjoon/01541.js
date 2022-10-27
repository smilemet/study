const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString()
const input = fs.readFileSync("예제.txt").toString();

let Arr = input.split("-").map((v) => {
  return v
    .split("+")
    .map((v) => parseInt(v))
    .reduce((acc, cur) => (acc += cur), 0);
});

let answer = Arr.reduce((acc, cur, i) => {
  if (i === 0) return (acc += cur);
  else return (acc -= cur);
}, 0);

console.log(answer);
