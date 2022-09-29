// 기능개발
// forEach는 기존 배열을 바꾸지 않는다!
const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length !== 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let count = 0;

    progresses.some((p) => {
      if (p >= 100) {
        count++;
        return false;
      } else {
        return true;
      }
    });

    for (let i = 0; i < count; i++) {
      progresses.shift();
      speeds.shift();
    }

    if (count !== 0) answer.push(count);
  }

  return answer;
}

console.log(solution(progresses, speeds));

// 다른 풀이
// 달성까지 걸리는 일수를 계산
// 맨 앞의 날짜를 기준으로 일수를 체크하며 이전에 이미 완료된 작업이라면 +1을,
// 기준까지 완료되지 않은 작업이라면 기준을 변경 후 새 값을 추가해줌
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
