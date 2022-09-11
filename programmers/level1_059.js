// 성격 유형 검사하기
const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

function solution(survey, choices) {
  var answer = "";
  let test = {};
  let letters = "RTCFJMAN";

  // 초기화
  letters.split("").forEach((letter) => {
    test[letter] = 0;
  });

  // 채점
  choices.forEach((score, index) => {
    let first = survey[index][0];
    let second = survey[index][1];
    if (score >= 4) {
      test[first] += Math.abs(4 - score);
    } else {
      test[second] += Math.abs(4 - score);
    }
  });

  answer += test.R <= test.T ? "R" : "T";
  answer += test.C <= test.F ? "C" : "F";
  answer += test.J <= test.M ? "J" : "M";
  answer += test.A <= test.N ? "A" : "N";

  return answer;
}

console.log(solution(survey, choices));

// 다른 풀이
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
