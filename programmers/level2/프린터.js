// 프린터
const priorities = [9, 2, 3, 1];
const location = 0;

function solution(priorities, location) {
  for (let i = 0; i < priorities.length; i++) {
    let arr = [...priorities];
    let max = Math.max(...arr.splice(i));

    while (priorities[i] < max) {
      let current = priorities.splice(i, 1);
      priorities.push(...current);

      location = location >= i ? (location === i ? priorities.length - 1 : location - 1) : location;
    }
  }

  return location + 1;
}

console.log(solution(priorities, location));

// 다른 풀이
// 내 작업물인지 키를 붙인 새 배열 생성
// 전부 정렬할 필요 없이, 내 작업물이 출력될 순서에 바로 return
function solution2(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));

  let count = 0;

  while (true) {
    let cur = list.shift();

    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

solution2(priorities, location);
