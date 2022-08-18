// Lv. 1 나머지가 1이 되는 수 찾기

const a = 12;

function solution(n) {
  var answer = 0;

  for (let i = 1; n % i !== 1; i++) {
    answer = i + 1;
  }

  return answer;
}

console.log(solution(a));
