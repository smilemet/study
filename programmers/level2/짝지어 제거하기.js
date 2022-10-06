// 짝지어 제거하기
// 뿌요뿌요 형식은 stack으로 푸는 것이 효율적! 처음에는 regex로 풀었다가 효율성 빵점맞음
const s = "baabaa";

function solution(s) {
  let basket = [];

  for (let i = 0; i < s.length; i++) {
    if (basket[basket.length - 1] === s.charAt(i)) {
      basket.pop();
    } else {
      basket.push(s.charAt(i));
    }
  }

  return basket.length ? 0 : 1;
}

console.log(solution(s));
