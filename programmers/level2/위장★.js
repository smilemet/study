// 위장
// 경우의 수를 구하는 단순 문제! 어렵게 생각하지 말 것.
// 해당 부위에 아이템을 착용하지 않는 경우까지 해서 +1로 카운트하고,
// 최종 return 시는 아무것도 착용하지 않은 경우의 수 1 빼주기
const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function solution(clothes) {
  let answer = 1;
  let obj = {};

  clothes.forEach((v) => {
    obj[v[1]] = (obj[v[1]] || 1) + 1;
  });

  for (let key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
}

console.log(solution(clothes));
