// 문자열 내림차순으로 배치하기

const a = "Zbcdefg";

function solution(s) {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var answer = s
    .split("")
    .sort((a, b) => ABC.indexOf(b) - ABC.indexOf(a))
    .join("");

  return answer;
}

console.log(solution(a));
