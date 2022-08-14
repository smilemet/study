const a = ["marina", "josipa", "nikola", "vinko", "filipa"];
const b = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  participant.some((v, i) => {
    if (v !== completion[i]) {
      answer = v;
      return true;
    }
  });
  return answer;
}

console.log(solution(a, b));

// 다른 풀이
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
