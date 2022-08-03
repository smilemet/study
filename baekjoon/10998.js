const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
exports.input = input;
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a * b);
