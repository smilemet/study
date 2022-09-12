// 문자열 내 p와 y의 개수

const a = ["abce", "abcd", "cdx"];
const b = 2;

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;

    return 0;
  });
}

console.log(solution(a, b));
