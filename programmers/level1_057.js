// 로또의 최고 순위와 최저 순위
const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

function solution(lottos, win_nums) {
  var answer = [];

  let zero = lottos.filter((v) => v === 0);
  let not = lottos.filter((v) => v !== 0).filter((v) => win_nums.indexOf(v) === -1);
  console.log(not);

  // 최고
  switch (win_nums.length - not.length) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }

  // 최저
  switch (win_nums.length - zero.length - not.length) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }
  return answer;
}
console.log(solution(lottos, win_nums));

// 다른 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
