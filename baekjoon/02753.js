// const item = "2000";
// const input = item.toString().trim().split(" ");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const year = parseInt(input);
console.log(year % 4 === 0 && year % 100 !== 0 ? 1 : year % 400 === 0 ? 1 : 0);
