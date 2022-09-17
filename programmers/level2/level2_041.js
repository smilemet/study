// 구명보트
// 테스트를 통과하지 못했는데 반례를 찾지 못함
const people = [20, 20, 80, 80];
const limit = 100;

function solution(people, limit) {
  var answer = 0;
  // 배열 최솟값 구하기
  const min = limit - Math.min(...people);

  // 1명 타는 경우
  answer = people.filter((person) => {
    if (person > min) return true;
  }).length;

  // 2명 태울 수 있는 경우
  const arr = people
    .filter((person) => {
      if (person <= min) return true;
    })
    .sort((a, b) => a - b);

  let turn = Math.floor(arr.length / 2);

  for (let i = 0; i <= turn - 1; i++) {
    if (arr[i] + arr[arr.length - 1 - i] <= limit) {
      answer++;
    } else {
      answer += 2;
    }
  }

  if (arr.length % 2 !== 0) answer++;

  return answer;
}

console.log(solution(people, limit));

// 다른 풀이
// 추가 조작 없이 좌우에서 하나씩 다가오는 형태
function solution(people, limit) {
  people.sort((a, b) => a - b);
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
