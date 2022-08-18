// Lv. 1 약수의 합

const a = 5;

function solution(s) {
  var answer = 0;

  for (let i = 1; i <= s; i++) {
    if (s % i === 0) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution(a));
