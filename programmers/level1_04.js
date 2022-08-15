const a = "one4seveneightone4seveneightone4seveneight";

function solution(s) {
  let str = s
    .replace(/zero/g, "0")
    .replace(/one/g, "1")
    .replace(/two/g, "2")
    .replace(/three/g, "3")
    .replace(/four/g, "4")
    .replace(/five/g, "5")
    .replace(/six/g, "6")
    .replace(/seven/g, "7")
    .replace(/eight/g, "8")
    .replace(/nine/g, "9");

  return Number(str);
}

console.log(solution(a));

// 다른 풀이
function solution2(s) {
  const stringToNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    s = s.split(stringToNum[i]).join(i);
  }
  return parseInt(s);
}

console.log(solution2(a));
