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

// function collatz(num) {
//     var answer = 0;
//     while(num !=1 && answer !=500){
//         num%2==0 ? num = num/2 : num = num*3 +1;
//     answer++;
//   }
//     return num == 1 ? answer : -1;
// }
