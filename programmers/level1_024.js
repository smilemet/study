// 문자열 내 p와 y의 개수

const a = "Pyy";

function solution(s) {
  var answer = true;

  let countP = 0;
  let countY = 0;
  s.toLowerCase()
    .split("")
    .map((v) => {
      if (v === "p") countP++;
      if (v === "y") countY++;
    });

  return countP === countY;
}

console.log(solution(a));
