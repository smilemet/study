// 신규 아이디 추천
const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

function solution(id_list, report, k) {
  let list = new Array(id_list.length).fill(0);
  let answer = new Array(id_list.length).fill(0);

  // 중복 신고 삭제 & 2차 배열화
  const setReport = [...new Set(report)].map((v) => v.split(" "));

  // 유저별 신고횟수 카운트
  for (let i = 0; i < setReport.length; i++) {
    let index = id_list.indexOf(setReport[i][1]);
    list[index]++;
  }

  // 기준 이상 신고자 걸러내기 & 해당 유저 신고자가 받을 메일 회수 카운트
  for (let i = 0; i < list.length; i++) {
    if (list[i] >= k) {
      let arr = setReport.filter((v) => v[1] === id_list[i]);
      arr.forEach((v) => {
        let index = id_list.indexOf(v[0]);
        answer[index]++;
      });
    }
  }

  return answer;
}

console.log(solution(id_list, report, k));
