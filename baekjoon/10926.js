// const input = " joonAs ".trim().split(" ");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(input[0] + "??!");
