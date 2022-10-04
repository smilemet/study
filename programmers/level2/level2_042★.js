// 오픈채팅방
// 처음에는 유저 입출입을 모두 체크하려고 접근했는데 그러면 너무 복잡해진다.
// 닉네임을 넣어주고 매번 변경하려고 하지 말고, id로 라벨링할 것!
// 1. 입출입을 기록한다.
// 2. 이 때, 유저 구분을 위해서 name이 아닌 id로 등록한다.
// 3. userid와 name을 업데이트하는 별개의 object 혹은 map을 만들어두었다가 최종적으로 id를 name으로 교체
const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  var answer = [];
  const map = new Map(); // 유저 아이디 변경

  for (let i = 0; i < record.length; i++) {
    const [state, userid, name] = record[i].split(" ");

    if (state === "Leave") {
      answer.push([userid, "님이 나갔습니다."]);
      continue;
    }

    if (state === "Enter") {
      answer.push([userid, "님이 들어왔습니다."]);
    }

    map.set(userid, name);
  }

  return answer.map((v) => map.get(v[0]) + v[1]);
}

console.log(solution(record));
