// 문자열 내 p와 y의 개수

const a = 3;
const b = 5;

function solution(a, b) {
  var answer = 0;
  let small = Math.min(a, b);
  let big = Math.max(a, b);
  for (let i = small; i <= big; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(a, b));
