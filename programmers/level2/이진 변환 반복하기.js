// 이진 변환 반복하기
const s = "0000";

function solution(s) {
  var answer = [0, 0];

  while (s !== "1") {
    let onlyone = s.match(/1/g).join("");

    answer[1] += s.length - onlyone.length;
    answer[0]++;
    s = onlyone.length.toString(2);
  }

  return answer;
}

console.log(solution(s));

// 다른 풀이
// 전부 0으로 주어질 때를 막아주는 코드 포함
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
