const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString()
const input = fs.readFileSync("input.txt").toString();
let answer = 0;

let stringArr = input
  .replace(/(0)\1+/g, "0")
  .replace(/(1)\1+/g, "1")
  .split("");

let one = stringArr.filter((v) => v === "1").length;
let zero = stringArr.filter((v) => v === "0").length;

console.log(Math.min(one, zero));
