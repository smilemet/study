// 숫자의 표현
const n = 15;

function solution(n) {
  var answer = 1;
  let arr = [1, 2];

  while (arr.reduce((a, b) => a + b) <= n) {
    let rest = n - arr.reduce((a, b) => a + b);
    if (rest === 0 || rest % arr.length === 0) ++answer;
    arr.push(arr[arr.length - 1] + 1);
  }

  return answer;
}

// 다른 풀이
// 연속된 수를 합하는 경우의 수는 홀수 약수의 수와 같다
function solution(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}

console.log(solution(n));
