// [1차] 비밀지도

const a = 6;
const b = [46, 33, 33, 22, 31, 50];
const c = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  var answer = [];

  let binary1 = [];
  let binary2 = [];

  [arr1, arr2].forEach((element) => {
    element.map((v) => {
      let trans = (v % 2).toString();

      for (; v > 1; ) {
        v = parseInt(v / 2);
        trans = (v % 2) + trans;
      }

      if (trans.length < n) {
        trans = "0".repeat(n - trans.length) + trans;
      }

      if (element === arr1) binary1.push(trans);
      if (element === arr2) binary2.push(trans);
    });
  });

  for (let i = 0; i < n; i++) {
    let trans = "";
    for (let j = 0; j < n; j++) {
      trans += binary1[i][j] === "1" || binary2[i][j] === "1" ? "1" : "0";
    }

    answer.push(trans.replace(/1/g, "#").replace(/0/g, " "));
  }

  return answer;
}

console.log(solution(a, b, c));

// 다른 풀이
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) => (+a ? "#" : " "))
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
