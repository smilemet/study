// Lv. 1 정수 내림차순으로 배치하기

function solution(n) {
  var answer = "";

  let N = n + "";
  let arr = [];

  for (let i = 0; i < N.length; i++) {
    arr.push(N[i]);
    console.log(arr);
  }

  arr.sort((a, b) => b - a);
  arr.map((v) => (answer += v));
  return parseInt(answer);
}
