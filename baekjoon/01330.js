const item = "215 52";
const input = item.toString().trim().split(" ");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A === B ? "==" : A > B ? ">" : "<");

// if (A > B) {
//   console.log(">");
// } else if (A < B) {
//   console.log("<");
// } else {
//   console.log("==");
// }
