const a = "1S*2T*3S";

function solution(dartResult) {
  var answer = 0;
  let score = dartResult.match(/(\d+)([^0~9][*#]?)/g);
  let score2 = [];

  score.map((v, i) => {
    let num = 0;

    // 영역 체크
    if (v.indexOf("S") > 0) {
      num = v.slice(0, v.indexOf("S")) / 1;
    } else if (v.indexOf("D") > 0) {
      num = Math.pow(v.slice(0, v.indexOf("D")) / 1, 2);
    } else if (v.indexOf("T") > 0) {
      num = Math.pow(v.slice(0, v.indexOf("T")) / 1, 3);
    }

    // 스타상, 아차상
    if (v.indexOf("*") > 0) {
      num *= 2;
      score2[i - 1] *= 2;
    } else if (v.indexOf("#") > 0) {
      num *= -1;
    }

    score2.push(num);
    console.log(num);
  });
  console.log(score2);

  answer = score2.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(solution(a));

// 다른 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
    let score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    console.log(split);

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

console.log(solution(a));
