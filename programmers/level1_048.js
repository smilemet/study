// 크레인 인형뽑기 게임
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  var answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    // 인형을 뽑을 열
    const col = moves[i] - 1;

    // 인형 뽑기
    for (let j = 0; j < board.length; j++) {
      let pick = 0;
      let puyo = 0;

      if (board[j][col] === 0) continue;

      pick = board[j][col];
      board[j][col] = 0;

      // 만약 같은 수가 연속되면 뿌요뿌요
      if (pick !== 0) {
        const index = basket.length - 1;

        if (pick === basket[index]) {
          puyo = basket.pop();
          answer += 2;
        } else {
          basket.push(pick);
        }
      }

      break;
    }
  }

  return answer;
}

console.log(solution(board, moves));
