// Lv. 1 자릿수 더하기

function solution(n) {
  var answer = 0;
  let A = n + "";

  A.split("").map((v) => {
    answer += parseInt(v);
  });

  return answer;
}
