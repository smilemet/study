// 최댓값과 최솟값
const s = "-1 -2 -3 -4";

function solution(s) {
  return [
    Math.min(...s.split(" ").map((v) => parseInt(v))),
    Math.max(...s.split(" ").map((v) => parseInt(v))),
  ].join(" ");
}

console.log(solution(s));
