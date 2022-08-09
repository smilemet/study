function solution(arr) {
  let answer = 0;
  arr.map((v) => {
    answer += v;
  });
  answer = answer / arr.length;
  return answer;
}
