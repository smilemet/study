const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  line
    .trim()
    .split(" ")
    .map((v) => {
      input.push(parseInt(v));
    });
}).on("close", () => {
  let [A, B] = input;
  if (B < 45) {
    B = B + 15;
    A = A - 1;
    if (A === -1) {
      A = 23;
    }
  } else {
    B = B - 45;
  }

  console.log(A, B);
});
