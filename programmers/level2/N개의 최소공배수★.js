// N개의 최소공배수
// 맨 뒤의 수부터 차근차근 비교하여 두 수의 최소공배수 구하기 -> 다시 배열에 넣어주기 반복하면 된다.
const arr = [3, 4, 9, 16];

function solution(arr) {
  while (arr.length >= 2) {
    let a = arr.pop();
    let b = arr.pop();
    let cm = [];

    for (let i = Math.min(a, b); i >= 2; i--) {
      if (a % i === 0 && b % i === 0) {
        cm.push(i);
        a /= i;
        b /= i;
      }
    }

    arr.push(cm.reduce((a, b) => a * b, 1) * a * b);
  }

  return arr[0];
}

console.log(solution(arr));

// 다른 풀이
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
