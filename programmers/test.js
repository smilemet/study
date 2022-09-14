const n = 622395;

function solution(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  }
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  }
  console.log(j);
  for (j--, n++; i !== j; i--) {
    console.log("j ::: " + j);
    console.log("i ::: " + i);
    n = n << 1;
  }
  for (i; i; i--, n++) {
    n = n << 1;
  }
  return n;
}

console.log(solution(n));

const a = 622397;
const b = 622395;

console.log(b.toString(2), a.toString(2))