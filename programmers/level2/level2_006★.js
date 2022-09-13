// 올바른 괄호
const s = "()()(";

function solution(s) {
  var answer = true;

  while (s.length > 0) {
    let newString = s.split("()").join("");
    if (s !== newString) {
      s = newString;
    } else {
      s = "";
      answer = false;
    }
  }

  return answer;
}

console.log(solution(s));

// 다른 풀이
function solution2(s) {
  let opened = 0;
  for (const bracket of s) {
    if (bracket === "(") opened += 1;
    if (bracket === ")") opened -= 1;
    if (opened < 0) return false;
  }
  return opened === 0;
}

console.log(solution2(s));
