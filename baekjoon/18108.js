// const input = " 2541 ";
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(parseInt(input) - 543);
