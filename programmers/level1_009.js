// Lv. 1 짝수와 홀수

function solution(num) {
  var answer = "";

  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");

  return answer;
}
