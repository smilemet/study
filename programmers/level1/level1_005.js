// Lv. 1 하샤드 수

function solution(x) {
  var answer = true;
  let num = String(x);
  let str = 0;

  for (let i = 0; i < num.length; i++) {
    str += parseInt(num[i]);
  }

  if (x % str === 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
