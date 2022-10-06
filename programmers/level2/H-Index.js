// H-Index
const citations = [3, 0, 9, 5];

function solution(citations) {
  let answer = 0;

  for (let i = 0; i <= Math.max(...citations); i++) {
    if (citations.filter((value) => value >= i).length >= i) {
      answer = i;
    } else {
      if (answer > 0) break;
    }
  }

  return answer;
}

// console.log(solution(citations));

// 다른 풀이
function solution2(citations) {
  citations = citations.sort(sorting); // 큰 순으로 정렬
  console.log(citations);

  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;

  function sorting(a, b) {
    return b - a;
  }
}

console.log(solution2(citations));
