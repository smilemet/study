// 소수 찾기

const a = 10;

function solution(n) {
  var answer = 0;

  const arr = new Array(n + 1).fill(true);
  console.log(arr);

  for (let i = 2; i <= n; ++i) {
    if (!arr[i]) continue;
    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }

  for (let i = 2; i <= n; ++i) {
    if (arr[i]) answer++;
  }
  return answer;
}

console.log(solution(a));
