const p = "()))((()";

function solution(p) {
  var answer = "";
  let left = 0;
  let right = 0;

  if (p === "") return "";

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") left++;
    if (p[i] === ")") right++;

    if (left === right) {
      let u = p.substring(0, i + 1);
      let v = p.substring(i + 1);

      if (rightStr(u)) {
        answer = u + solution(v);
        return answer;
      } else {
        answer += `(${solution(v)})`;

        let str = u.split("");
        str.shift();
        str.pop();
        str = str
          .map((v) => {
            if (v === "(") return ")";
            if (v === ")") return "(";
          })
          .join("");

        answer += str;
        return answer;
      }
    }
  }
}

console.log(solution(p));

function rightStr(string) {
  let answer = true;
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") count++;
    if (string[i] === ")") count--;

    if (count < 0) answer = false;
    if (i === string.length - 1 && count > 0) answer = false;
  }

  return answer;
}

// 다른 풀이
// 1. solution 함수 자체를 재귀로 만들고, 주어지는 문자열의 길이가 0이면 중단
// 2. do-while문으로 균형잡힌 괄호 문자열의 길이를 구함★
// 3. u, v에 각각 문자열 할당 -> v는 재귀함수 결과로 처리
// 4. u는 이미 균형잡힌 괄호 문자! 그러므로 처음이 "(" 로 시작하는 것만 체크하면 올바른 건지 알 수 있음★
function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
