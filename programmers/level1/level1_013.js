// Lv. 1 자연수 뒤집어 배열로 만들기

function solution(n) {
  const N = n.toString();
  let answer = [];
  for (let i = N.length - 1; i > -1; i--) {
    answer.push(parseInt(N[i]));
  }
  return answer;
}
