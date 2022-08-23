// 소수 찾기

const a = 10;

function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(a));
