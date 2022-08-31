// 두 개 뽑아서 더하기

const a = [2, 1, 3, 4, 1];

function solution(numbers) {
  var answer = [];

  numbers.forEach((value, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      let item = value + numbers[i];
      answer.indexOf(item) === -1 ? answer.push(item) : null;
    }
  });
  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution(a));

// 다른 풀이
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
