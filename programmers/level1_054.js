// 같은 숫자는 싫어

const a = [4, 4, 3, 3, 4, 5, 3];

function solution(arr) {
  var answer = [];
  return arr.filter((v, i) => v !== arr[i - 1]);
}

console.log(solution(a));
