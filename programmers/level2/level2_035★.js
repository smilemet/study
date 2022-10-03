// 가장 큰 수
// sort를 사용하여 각 요소들을 앞뒤로 결합했을 때 어느쪽이 더 큰지 비교하여 정렬한다.
const numbers = [0, 0, 0, 0];

function solution(numbers) {
  let arr = numbers.map((v) => v + "");

  arr.sort((a, b) => {
    return parseInt(b + a) - parseInt(a + b);
  });

  let answer = arr.join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution(numbers));

// 다른 풀이
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}
