// 실패율

const answers = [1, 3, 2, 4, 2];

function solution(answers) {
  const supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let answer = [];

  // 채점표
  supo.forEach((v, i) => {
    answer.push([
      i + 1,
      answers.filter((value, index) => {
        if (value === v[index % v.length]) return v;
      }).length,
    ]);
  });

  // 점수 정렬
  answer = answer.sort((a, b) => b[1] - a[1]);

  // 최고점
  const max = answer[0][1];

  // 가장 높은 점수
  return answer
    .filter((v) => {
      if (v[1] === max) return true;
    })
    .map((v) => v[0]);
}

console.log(solution(answers));

// 다른 풀이
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max === count[i]) answer.push(i + 1);
  }

  return answer;
}
