// 약수의 개수와 덧셈

const a = 16;
const b = 16;

function solution(left, right) {
  var answer = 0;
  let count = {};

  // 재귀함수
  const x = (current, k, num) => {
    if (k > num / 2) return;
    if (current % k !== 0) return x(current, k + 1, num);

    // 약수 카운트
    count.hasOwnProperty(k) ? count[k]++ : (count[k] = 1);

    return x(current / k, k, num);
  };

  for (let i = left; i <= right; ++i) {
    count = {};

    // 재귀함수 실행
    x(i, 2, i);

    // 소수인 경우
    if (Object.values(count).length === 0) {
      answer += i;
      continue;
    }

    // 소수가 아닌 경우
    let sum = Object.values(count)
      .map((v) => v + 1)
      .reduce((a, b) => a + b);

    sum % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    answer = Number.isInteger(Math.sqrt(i)) ? answer - i : answer + i;
  }
  return answer;
}

console.log(solution(a, b));
