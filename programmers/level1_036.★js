// 3진법 뒤집기

const a = 125;

function solution(n) {
  var answer = 0;
  let ternary = (n.toString(3) + "").split("").reverse();

  ternary.map((v, i) => {
    answer += i === ternary.length - 1 ? v % 3 : (v % 3) * Math.pow(3, ternary.length - i - 1);
  });

  return answer;
}

console.log(solution(a));

// 다른 풀이
const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

console.log(solution2(a));
