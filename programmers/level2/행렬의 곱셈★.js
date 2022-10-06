// 행렬의 곱셈
const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
const arr2 = [
  [1, 4],
  [2, 5],
  [3, 6],
];

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let current = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[i].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      current.push(sum);
    }
    answer.push(current);
  }

  return answer;
}

console.log(solution(arr1, arr2));

// 다른 풀이
function solution(arr1, arr2) {
  return arr1.map((row) => arr2[0].map((x, i) => row.reduce((a, b, c) => a + b * arr2[c][i], 0)));
}
