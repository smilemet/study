// K번째수

const a = [1, 5, 2, 6, 3, 7, 4];
const b = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];

  commands.forEach((v) => {
    let arr = array.slice(v[0] - 1, v[1]).sort((a, b) => a - b);
    answer.push(arr[v[2] - 1]);
  });

  return answer;
}

console.log(solution(a, b));
