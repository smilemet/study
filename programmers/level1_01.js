const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;

function solution(id_list, report, k) {
  var answer = [];
  let count = {};

  // 신고 횟수 카운트 객체
  id_list.map((v) => (count[v] = 0));
  report.map((v) => {
    let current = v.split(" ");
    count[current[1]]++;
  });

  // 신고 횟수 오버 유저 찾기
  for (let v in count) {
    if (count[v] >= k) {
    }
  }

  return answer;
}

console.log(solution(id_list, report, k));
