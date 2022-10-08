const name = "JEROEN";

// 다른 풀이
// 경우의 수를 잘 생각할 것.
// 1. A를 보고 뒤로 가는 경우
// 2. A를 밟고 지나가는 경우
// 3. A를 밟고 지나갔다가 돌아와서 뒤로 가는 경우
function solution(name) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let answer = 0;
  let minMoves = name.length - 1;

  name.split("").forEach((v, i) => {
    let target = alphabet.indexOf(v);
    if (target <= 12) answer += target;
    else answer += 26 - target;

    let index = i + 1;
    while (index < name.length && name[index] === "A") index++;

    minMoves = Math.min(minMoves, i * 2 + name.length - index); // 연속된 A를 마주하고 돌아가는 경우 vs 밟고 지나가는 경우
    minMoves = Math.min(minMoves, (name.length - index) * 2 + i); // vs 연속된 A를 다 밟았다가 돌아가는 경우
  });

  return answer + minMoves;
}

console.log(solution(name));
