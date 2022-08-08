const item = "21 56 154";
const input = item.toString().trim().split(" ");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
