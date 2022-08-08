// const item = `-50
// -501`;
// const input = item.toString().trim().split("\n");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  const [A, B] = input;

  console.log(A > 0 ? (B > 0 ? 1 : 4) : B > 0 ? 2 : 3);
});

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
