// Lv. 1 정수 제곱근 판별

function solution(n) {
  var answer = 0;
  console.log(n);
  let check = Math.sqrt(n);
  answer = check % 1 === 0 ? Math.pow(check + 1, 2) : -1;

  return answer;
}
