function solution(n, m) {
  let answer = [];

  let smaller = Math.min(n, m);
  let arr = [];
  let lcm = 1;
  let gcd = 1;

  // 최소공배수
  for (let i = 1; i <= smaller; i++) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
    }
  }

  // 최대공약수
  gcd = Math.max(...arr);
  lcm = (n / gcd) * (m / gcd) * gcd;
  answer = [gcd, lcm];

  return answer;
}

// function gcdlcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }
