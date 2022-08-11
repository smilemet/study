let price = 5;
let money = 100;
let count = 4;

function solution(price, money, count) {
  var answer = -1;
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  answer = money - sum;
  return answer < 0 ? Math.abs(answer) : 0;
}

console.log(solution(price, money, count));
