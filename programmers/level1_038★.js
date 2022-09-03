// 실패율

const a = 5;
const b = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  var answer = [];
  let fail = [];

  // 인풋되는 N을 가지고 스테이지 배열 만들기
  for (let i = 1; i <= N; ++i) {
    answer.push(i);
  }

  // 스테이지 실패율 배열
  for (let i = 1; i <= N; ++i) {
    let ing = 0;
    stages.forEach((v) => {
      if (v === i) ing++;
    });

    let pass = 0;
    stages.forEach((v) => {
      if (v >= i) pass++;
    });

    fail.push(ing / pass);
  }

  // 정렬
  for (let i = 0; i < fail.length - 1; ++i) {
    for (let j = i + 1; j < fail.length; ++j) {
      if (fail[i] < fail[j]) {
        let tmp1 = fail[i];
        let tmp2 = answer[i];

        fail[i] = fail[j];
        answer[i] = answer[j];
        fail[j] = tmp1;
        answer[j] = tmp2;
      }
      // 만약 실패율이 같다면
      if (fail[i] === fail[j]) {
        if (answer[i] > answer[j]) {
          let tmp2 = answer[i];
          answer[i] = answer[j];
          answer[j] = tmp2;
        }
      }
    }
  }

  return answer;
}

// 다른 풀이
function solution2(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
    console.log(result);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

console.log(solution2(a, b));
