// 다음 큰 숫자
const n = 655395;

function solution(n) {
  var answer = 0;
  let i = 1;

  let num = 0;

  n.toString(2)
    .split("")
    .forEach((v) => {
      if (v === "1") num++;
    });

  while (answer === 0) {
    let count = 0;

    (n + i)
      .toString(2)
      .split("")
      .forEach((v) => {
        if (v === "1") count++;
      });

    if (num === count) answer = n + i;

    i++;
  }

  return answer;
}

console.log(solution(n));

// 다른 풀이 1
// 접근 방식은 같지만 정규식 이용
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

// 다른 풀이 2
// 시프트 연산자
function nextBigNumber(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {
    n = n << 1;
  } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}

console.log(nextBigNumber(n));
