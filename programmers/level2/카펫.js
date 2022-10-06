// 카펫
// 약수 배열을 만들지 않고 약수의 중간값 찾으려면 제곱근
const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
  let answer = [];
  let arr = []; // yellow의 약수

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) arr.push(i);
  }

  for (let i = 0; i < arr.length / 2; i++) {
    let height = arr[i] * 2;
    let width = (yellow / arr[i]) * 2;

    if (width + height + 4 === brown) {
      answer = [yellow / arr[i] + 2, arr[i] + 2];
    }
  }

  return answer;
}

console.log(solution(brown, yellow));
