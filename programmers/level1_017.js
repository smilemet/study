// Lv. 1 시저 암호

const a = "z";
const b = 1;

function solution(s, n) {
  const big = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const small = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var answer = "";

  answer = s
    .split("")
    .map((v) => {
      if (v !== " " && big.indexOf(v) !== -1) {
        let num = big.indexOf(v);
        return big[num + n >= 26 ? num + n - 26 : num + n];
      } else if (v !== " " && big.indexOf(v) === -1) {
        let num = small.indexOf(v);
        return small[num + n >= 26 ? num + n - 26 : num + n];
      } else if (v == " ") {
        return " ";
      }
    })
    .join("");

  return answer;
}

console.log(solution(a, b));

// 다른 사람의 풀이
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
