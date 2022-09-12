// Lv. 1 완주하지 못한 선수

const a = [3, 3, 3, 2, 2, 4];

function solution(nums) {
  let max = nums.length / 2;
  let count = [...new Set(nums)];

  return max >= count.length ? count.length : max;
}

console.log(solution(a));

// 다른 풀이
// function solution(nums) {
//   const max = nums.length / 2;
//   const arr = [...new Set(nums)];

//   return arr.length > max ? max : arr.length;
// }
