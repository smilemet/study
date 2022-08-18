// Lv. 1 제일 작은 수 제거하기

function solution(arr) {
  const answer = arr.filter((v) => v > Math.min(...arr));

  return answer.length === 0 ? [-1] : answer;
}
