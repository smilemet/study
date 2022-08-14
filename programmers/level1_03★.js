const input = "abcdefghijklmn.p";

function solution1(new_id) {
  var answer = "";
  answer = new_id
    .toLowerCase()
    .replace(/[^\w\-\.]/g, "")
    .replace(/[\.]{2,}/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "");

  if (!answer) answer = "a";
  if (answer.length >= 16) answer = answer.substring(0, 15).replace(/\.$/, "");
  if (answer.length <= 2) answer = answer.padEnd(3, answer[answer.length - 1]);

  return answer;
}

// console.log(solution1(input));

// 다른 풀이
function solution2(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

const solution3 = (new_id) => {
  return new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");
};

console.log(solution3(input));
