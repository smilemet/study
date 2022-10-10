const s = "abcabcabc";

function solution(s) {
  var answer = 0;

  for (let i = 1; i <= s.length; i++) {
    let string = s;
    let strArr = [1];

    while (string.length !== 0) {
      let str = string.substring(0, i);

      if (string.indexOf(str + str) === 0) {
        if (typeof strArr[strArr.length - 1] === "number") strArr[strArr.length - 1]++;
        if (typeof strArr[strArr.length - 1] === "string") strArr.push(2);
      } else {
        strArr.push(str);
      }

      string = string.substring(i);
    }

    if (strArr[0] === 1) strArr = strArr.splice(1);

    let result = strArr.join("").length;
    answer = answer === 0 ? result : Math.min(answer, result);
  }

  return answer;
}

console.log(solution(s));

// 다른 풀이
// 함수형 같은데 이해하는데 시간이 조금 걸릴듯...!
const solution2 = (s) => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map((i) => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ""}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
      ["", "", 0]
    )
  );
};

const chunk = (s, n) => (s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)]);

// console.log(solution2(s));
