// 선이 가로지르는 사각형의 수는 두 수를 더한 뒤 최대공약수를 뺀 것!
const w = 8;
const h = 12;

function solution(w, h) {
  const gcdVal = gcd(w, h);

  return w * h - (w + h - gcdVal);
}

console.log(solution(w, h));

function gcd(w, h) {
  const mod = w % h;

  if (mod === 0) return h;
  return gcd(h, mod);
}

// 다른 풀이
function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}
