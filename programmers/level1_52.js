function solution(phone_number) {
  var answer = "";
  let count = phone_number.length - 4;

  answer = "*".repeat(count) + phone_number.substring(count);

  return answer;
}
