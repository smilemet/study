const babbling = ["ayayeaya"];

function solution(babbling) {
  let answer = 0;
  const possible = ["aya", "ye", "woo", "ma"];

  babbling.forEach((b) => {
    let target = b;

    possible.forEach((p) => {
      let isExist = target.indexOf(p);

      if (isExist !== -1) {
        let next = target.substring(p.length);
        let isSerial = next.indexOf(p);
        if (isSerial === 0) {
          return;
        }
      }

      let reg = new RegExp(`(${p})`, "g");
      target = target.replace(reg, "");
    });

    // console.log(target);
    if (target.length === 0) answer++;
  });

  return answer;
}

console.log(solution(babbling));

// 다른 풀이
// 연속된 문자를 문자열의 합으로 구해준거 주목!!!
function solution(babbling) {
  let df = ["aya", "ye", "woo", "ma"];
  let res = 0;

  for (let w of babbling) {
    if (df.some((f) => w.includes(f + f))) continue;

    let rest = df.reduce((a, f) => a.replaceAll(f, ""), w);

    if (rest.length > 0) continue;

    res++;
  }

  return res;
}
