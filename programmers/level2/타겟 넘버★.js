// 타겟 넘버
// DFS문제 -> 재귀함수로 구현
// +, -를 반복하며 배열 끝까지 모두 탐색함
const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
  let answer = 0;

  const dfs = (level, sum) => {
    console.log(sum);
    if (level === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }

    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  };

  dfs(0, 0);

  return answer;
}

console.log(solution(numbers, target));
