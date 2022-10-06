// 소수 찾기
// DFS 탐색법을 사용함
const numbers = "1732";

function solution(numbers) {
  const n = numbers.length;
  const set = new Set();

  for (let m = 1; m <= n; m++) {
    let visited = Array.from({ length: n }, () => 0); // Array.from을 이렇게 쓸 수 있다는 거 알아두기!
    let temp = Array.from({ length: m }, () => 0);

    DFS(0, m, visited, temp);
  }

  function DFS(L, m, visited, temp) {
    if (L === m) {
      const number = Number(temp.join(""));
      const isPrimeNumber = isPrime(number);
      if (isPrimeNumber) set.add(number);
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          temp[L] = numbers[i];
          DFS(L + 1, m, visited, temp);
          visited[i];
        }
      }
    }
  }

  return set.size;
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(solution(numbers));

// 다른 풀이
function solution(numbers) {
  var answer = 0;

  var n = numbers.split("");
  var nums = new Set();
  combi(n, "");

  function combi(a, s) {
    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));
        console.log(Number(s));
        if (chkPrime(Number(s))) {
          answer++;
        }
      }
    }
    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {
        var t = a.slice(0);
        t.splice(i, 1);
        combi(t, s + a[i]);
      }
    }
  }

  function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
