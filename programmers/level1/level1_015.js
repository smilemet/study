// Lv. 1 이상한 문자 만들기

function solution(s) {
  var answer = "";
  s.split(" ").map((v, i) => {
    v.split("").map((v, i) => {
      answer += i % 2 === 0 ? v.toUpperCase() : v.toLowerCase();
    });
    if (i !== s.split(" ").length - 1) answer += " ";
  });
  return answer;
}
