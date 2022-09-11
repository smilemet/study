// [카카오 인턴] 키패드 누르기
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
  var answer = "";
  let keyboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let currentL = [];
  let currentR = [];

  // 위치 리턴 함수
  const position = (num) => {
    const posY = keyboard
      .map((arr, index) => {
        if (arr.indexOf(num) !== -1) return 4 - index;
        return -1;
      })
      .filter((v) => v !== -1);

    const posX = (num) => {
      if (num === "*") return 1;
      if (num === 0) return 2;
      if (num === "#") return 3;
      return num % 3 === 0 ? 3 : num % 3;
    };

    return [posX(num), posY[0]];
  };

  numbers.forEach((number) => {
    // 1, 4, 7
    if (number % 3 === 1) {
      answer += "L";
      currentL = position(number);
    } else if (number !== 0 && number % 3 === 0) {
      answer += "R";
      currentR = position(number);
    } else {
      let currentX = position(number);
      let rootL_X = Math.abs(currentL[0] + currentL[1] - (currentX[0] + currentX[1]));
      let rootR_X = Math.abs(currentR[0] + currentR[1] - (currentX[0] + currentX[1]));

      if (rootL_X > rootR_X) {
        answer += "R";
        currentR = position(number);
      } else if (rootL_X === rootR_X) {
        if (hand === "right") {
          answer += "R";
          currentR = position(number);
        } else {
          answer += "L";
          currentL = position(number);
        }
      } else {
        answer += "L";
        currentL = position(number);
      }
    }
  });
  return answer;
}

// 다른 풀이 2
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L";
  // Y축 위치값
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  // 손 위치
  let h = { L: [1, 1], R: [1, 1] };

  return numbers
    .map((x) => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1];
        return "L";
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return "R";
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        h.L = [position[x], 0];
        return "L";
      }
      h.R = [position[x], 0];
      return "R";
    })
    .join("");
}
