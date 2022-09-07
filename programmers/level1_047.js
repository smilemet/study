// 음양 더하기

const a = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  var answer = -1;
  let num = "0123456789";
  let numArr = num.split("").map((v) => parseInt(v));

  let arr = numArr.filter((v) => {
    return numbers.indexOf(v) === -1 ? 1 : 0;
  });

  return arr.reduce((a, b) => a + b);
}

console.log(solution(a));

// 다른 풀이
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
