// 문자열 다루기 기본

const a = "1234";

function solution(s) {
  const Number = "0123456789";
  var answer = true;

  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  }

  s.split("").some((v) => {
    if (Number.indexOf(v) < 0) {
      answer = false;
      return true;
    }
  });

  return answer;
}

console.log(solution(a));
