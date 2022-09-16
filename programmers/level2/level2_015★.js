// 피보나치 수
// 이전 계산값을 배열에 담아줌으로서 시간복잡도를 개선할 수 있다
const n = 50;

function solution(n) {
  let arr = [];

  arr[0] = 0;
  arr[1] = 1;

  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
  }

  return arr[n];
}
console.log(solution(n));
