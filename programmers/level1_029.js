// 가운데 글자 가져오기

const a = "abcd";

function solution(s) {
  var answer = "";
  let spells = s.length;
  let count = Math.floor(spells / 2);

  answer = spells % 2 !== 0 ? s[count] : s.slice(count - 1, count + 1);

  return answer;
}

console.log(solution(a));
