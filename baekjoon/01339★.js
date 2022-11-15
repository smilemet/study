const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [_, ...words] = fs.readFileSync("input.txt").toString().split("\r\n");

const solution = (words) => {
  const count = {}; // 알파벳 대치 숫자를 표기하는 객체
  words.forEach((word) => {
    [...word].forEach((a, i) => {
      if (!count[a]) count[a] = 0; // 새로 입력되는 알파벳의 경우
      count[a] += 10 ** (word.length - i - 1); // 자릿수 입력
    });
  });

  console.log(count);

  console.log(
    Object.values(count)
      .sort((a, b) => b - a)
      .reduce((acc, v, i) => acc + v * (9 - i), 0)
  );
};

solution(words);
