// [1차] 뉴스 클러스터링
// 중복은 Set으로 거르자!!
const str1 = "E=M*C^2";
const str2 = "e=m*c^2";

function solution(str1, str2) {
  let arr1 = [];
  let arr2 = [];

  let inter = 0;
  let union = 0;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // 2문자씩 집합
  for (let i = 0; i < str1.length - 1; i++) {
    let value = `${str1[i]}${str1[i + 1]}`;
    if (/^[a-zA-Z]*$/.test(value)) arr1.push(value);
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let value = `${str2[i]}${str2[i + 1]}`;
    if (/^[a-zA-Z]*$/.test(value)) arr2.push(value);
  }

  // 특수문자로 전부 버려지는 경우
  if (arr1.length === 0 && arr2.length === 0) {
    return 1 * 65536;
  }

  // 교집합, 합집합 카운트
  arr1.forEach((v) => {
    let index = arr2.indexOf(v);
    console.log(v);

    if (index === -1) {
      union++;
    } else {
      arr2[index] = false;
      inter++;
      union++;
    }
  });

  union += arr2.filter((v) => v !== false).length;

  return Math.floor((inter / union) * 65536);
}

console.log(solution(str1, str2));

// 다른 풀이
// 반복 작업을 해야할 때 함수로 만들어서 재활용하였음
// Set 객체를 이용해 교집합과 합집합을 쉽게 계산함
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
