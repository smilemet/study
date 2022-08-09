function solution(n) {
  var answer = 0;
  console.log(n);
  let check = Math.sqrt(n);
  answer = check % 1 === 0 ? Math.pow(check + 1, 2) : -1;

  return answer;
}
