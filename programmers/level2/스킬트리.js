// 스킬트리
const skill = "CBD";
const skill_trees = ["BACDE", "CADF", "AECB", "BDA"];

function solution(skill, skill_trees) {
  var answer = 0;

  skill_trees.forEach((tree) => {
    let queue = skill.split("");
    let isTrue = tree.split("").some((v) => {
      if (queue.indexOf(v) !== -1) {
        if (v === queue[0]) queue.shift();
        else return true;
      }
    });

    if (!isTrue) answer++;
  });

  return answer;
}

console.log(solution(skill, skill_trees));

// 다른 풀이 (정규식)
// skill에 해당하는 문자열만 남김
// 남긴 문자열이 올바른 순서를 지켰는지 확인 (indexOf)
// String.prototype.startsWith() : 문자열이 특정 문자로 시작하는지 확인하여 결과 리턴
function solution2(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => {
      return skill.indexOf(x) === 0 || x === "";
    }).length;
}

console.log(solution2(skill, skill_trees));
