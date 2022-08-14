const a = ["mislav", "stanko", "mislav", "ana"];
const b = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();

  participant.some((v, i) => {
    if (v !== completion[i]) {
      answer = v;
      return true;
    }
  });

  return answer;
}

console.log(solution(a, b));

// function gcdlcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }
