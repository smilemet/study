const s = "{{20,111},{111}}";

function solution(s) {
  var answer = [];
  let Arr = [];

  s = s.slice(1, s.length - 1);

  while (s.length !== 0) {
    let start = s.indexOf("{");
    let end = s.indexOf("}");

    let ins = s.slice(start + 1, end).split(",");
    Arr.push(ins);
    s = s.slice(end + 1);
  }

  Arr.sort((a, b) => a.length - b.length);
  Arr.forEach((arr) => {
    arr.forEach((v) => {
      v = parseInt(v);
      if (answer.indexOf(v) !== -1) return;
      answer.push(v);
    });
  });

  return answer;
}

// console.log(solution(s));

// 다른 풀이
// 함수형
// 문자를 벗겨내는 방법이 세련되었고, reduce 함수 쓰는 부분도 주의깊게 볼 것.
const tupleFrom = (str) =>
  str
    .slice(2, -2)
    .split("},{")
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce((acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))], []);

const toNumbers = (str) => str.split(",").map((it) => Number(it));
const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;
const solution2 = (s) => tupleFrom(s);

console.log(solution2(s));
