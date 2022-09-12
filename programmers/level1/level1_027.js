// 나누어 떨어지는 숫자 배열

const a = [3, 2, 6];
const b = 10;

function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  if (answer.length === 0) answer.push(-1);

  return answer;
}

console.log(solution(a, b));
