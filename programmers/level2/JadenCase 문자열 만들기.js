// JadenCase 문자열 만들기
const s = "3people unFollowed me";

function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      return v.substring(0, 1).toUpperCase() + v.substring(1).toLowerCase();
    })
    .join(" ");
}

console.log(solution(s));

// 다른 풀이
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
