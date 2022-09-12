// 소수 만들기

const a = [1, 2, 7, 6, 4];

function solution(nums) {
  let answer = 0;

  // 서로 다른 세 개의 수를 고르는 경우의 수
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}

// 소수 찾기
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

console.log(solution(a));
