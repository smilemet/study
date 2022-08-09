function solution(num) {
  let count = 0;

  const answer = (num) => {
    if (num === 1) {
      return;
    } else if (count === 500) {
      count = -1;
      return;
    } else {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      count++;
      answer(num);
    }
  };

  answer(num);
  return count;
}

// function solution(n) {
//   const newN = n + "";
//   const newArr = newN.split("").sort().reverse().join("");

//   return +newArr;
// }
