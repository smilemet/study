// 실패율

const n = 5;
const lost = [4, 2];
const reserve = [3, 5];

function solution(n, lost, reserve) {
  // 도난당한 학생에게 여분이 있을 경우
  const lost2 = lost.filter((v) => {
    if (reserve.indexOf(v) === -1) return v;
  });

  const reserve2 = reserve.filter((v) => {
    if (lost.indexOf(v) === -1) return v;
  });

  console.log(lost2, reserve2);

  // 여분이 있는 학생 수
  const save = reserve2.filter((v) => {
    if (lost2.indexOf(v - 1) !== -1 || lost2.indexOf(v + 1) !== -1) return v;
  });

  return lost2.length > save.length ? (answer = n - (lost2.length - save.length)) : n;
}

console.log(solution(n, lost, reserve));
