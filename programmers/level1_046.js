// 음양 더하기

const a = [4, 7, 12];
const b = [true, false, true];

function solution(absolutes, signs) {
  let answer = 0;

  absolutes.forEach((v, i) => {
    if (signs[i]) {
      answer += v;
    } else {
      answer += -v;
    }
  });

  return answer;
}

console.log(solution(a, b));
