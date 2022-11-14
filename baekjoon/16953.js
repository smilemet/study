const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const [init, target] = fs.readFileSync("input.txt").toString().split(" ");

let count = 0;

const solution = (init, num) => {
  let nextNum = 0;

  if (num % 2 !== 0) {
    if (num % 10 !== 1) return -1;

    nextNum = Math.floor(num / 10);
  } else {
    nextNum = num / 2;
  }

  count++;
  if (init === nextNum) return count + 1;

  return nextNum < init ? -1 : solution(init, nextNum);
};

console.log(solution(parseInt(init), parseInt(target)));
