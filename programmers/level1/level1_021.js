// 서울에서 김서방 찾기

const a = ["Jane", "Kim"];

function solution(n) {
  var answer = 0;

  answer = `김서방은 ${n.indexOf("Kim")}에 있다`;

  return answer;
}

console.log(solution(a));
