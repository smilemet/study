let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./예제.txt").toString().split("\r\n");

const param = input[1].split(" ").sort((a, b) => a - b);
let arr = [];

param.map((v, i) => {
  if (i === 0) {
    arr.push(v);
  } else {
    arr.push(arr[i - 1] + v);
  }
});

const answer = arr.reduce((acc, cur) => acc + cur);
console.log(answer);

// 다른 풀이
var input2 = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var map_sorted = input2[1].split(" ").sort(function (a, b) {
  return a - b;
});
var sum = 0;
for (var i = 0; i < map_sorted.length; i++) {
  sum += map_sorted[i] * (map_sorted.length - i);
}
console.log(sum);
