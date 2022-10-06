// 최솟값 만들기
const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((v, i) => {
    answer += v * B[i];
  });

  return answer;
}

console.log(solution(A, B));
