// 큰 수 만들기
// 복잡하게 생각하지 말고,
// 숫자를 일단 stack에 넣어준 후 다음 요소들을 체크하며 stack에 들어간 수와 크기 비교
// k가 남아있는 만큼 계속해서 버릴 수 있다는 것 주의!
const number = "7777777";
const k = 4;

function solution2(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }

    stack.push(el);
  }

  stack.splice(stack.length - k, k);
  return stack.join("");
}

console.log(solution2(number, k));
