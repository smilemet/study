// 게임 맵 최단거리
// 이해못해서 나중에 다시 봐야함

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  let answer = 1;
  let visited = maps;
  let queue = [];

  // 상하좌우 이동
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 초기 행과 열의 개수
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = x + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}

console.log(solution(maps));
