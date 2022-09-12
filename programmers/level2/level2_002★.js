// 124 나라의 숫자
const n = 10;

function solution(n) {
  let answer = "";
  let arr = [4, 1, 2];

  while (n) {
    answer = arr[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
}

console.log(solution(n));
