let arr = [4, 3, 2, 1];

function solution(arr) {
  const answer = arr.filter((v) => v > Math.min(...arr));

  return answer.length === 0 ? [-1] : answer;
}

console.log(solution(arr));
