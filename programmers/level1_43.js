function solution(n) {
  const N = n.toString();
  let answer = [];
  for (let i = N.length - 1; i > -1; i--) {
    answer.push(parseInt(N[i]));
  }
  return answer;
}
