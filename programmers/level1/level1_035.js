// 예산

const a = [2, 2, 3, 3];
const b = 10;

function solution(d, budget) {
  var answer = 0;
  let count = 0;

  d.sort((a, b) => a - b).some((v) => {
    count += v;
    if (count > budget) {
      return answer;
    }
    answer++;
  });

  return answer;
}

console.log(solution(a, b));
