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
      if (big.indexOf(v) !== -1) {
        let num = big.indexOf(v);
        return big[(num + n) % 25];
      } else if (big.indexOf(v) !== -1) {
        let num = small.indexOf(v);
        return small[(num + n) % 25];
      }
    })
    .join("");

  return answer;
}

console.log(solution(a, b));
