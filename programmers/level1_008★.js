// Lv. 1 최대공약수와 최소공배수

const a = 10;
const b = 20;

function solution(n, m) {
  let answer = [];

  let smaller = Math.min(n, m);
  let arr = [];
  let lcm = 1;
  let gcd = 1;

  // 공약수 구하기
  for (let i = 1; i <= smaller; i++) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
    }
  }

  console.log(arr);

  // 최대공약수
  gcd = Math.max(...arr);
  // 최소공배수
  lcm = (n / gcd) * (m / gcd) * gcd;

  answer = [gcd, lcm];
  return answer;
}

solution(a, b);

// function gcdlcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }
