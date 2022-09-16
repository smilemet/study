// 영어 끝말잇기
const n = 3;
const words = [
  "hello",
  "observe",
  "effect",

  "take",
  "either",
  "recognize",

  "encourage",
  "ensure",
  "establish",

  "hang",
  "gather",
  "refer",

  "reference",
  "estimate",
  "executive",

  "reference",
  // "estimate",
  // "sxecutive",
];

function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let person = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].charAt(words[i - 1].length - 1);

      if (i > words.indexOf(word) || words[i][0] !== last) {
        answer = [person, turn];
        break;
      }
    }
  }

  return answer;
}

console.log(solution(n, words));

// 다른 풀이
// 이전 배열 중복체크를 slice로 해준 점에 주목
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0] ? idx : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
