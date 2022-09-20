// 멀리 뛰기
const n = 6;
const MOD = 1234567;
const Arr = [0, 1, 2];

function solution(n) {
  return fivo(n);
}

function fivo(n) {
  if (n <= 2) return Arr[n];
  if (Arr[n]) return Arr[n];
  else return (Arr[n] = (fivo(n - 1) + fivo(n - 2)) % MOD);
}

console.log(solution(n));
