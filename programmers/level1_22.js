const a = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];
// const b = 2;

function solution(sizes) {
  var answer = 0;

  // 순서 정렬
  const sizes2 = sizes.map((v) => v.sort((a, b) => a - b));

  // 가로폭 중 최소값
  const widthArr = sizes2.map((v) => v[0]);

  // 세로폭 중 최소값
  const heightArr = sizes2.map((v) => v[1]);

  answer = Math.max(...widthArr) * Math.max(...heightArr);
  return answer;
}
console.log(solution(a));

// 다른 풀이
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))],
    [0, 0]
  );
  return hor * ver;
}
