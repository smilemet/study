// Lv. 1 2016년

const a = 1;
const b = 2;

function solution(a, b) {
  const getNowDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = new Date(2016, a - 1, b).getDay();
  return getNowDay[day];
}

console.log(solution(a, b));

// 다른 답안
function getDayName(a, b) {
  var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return dayList[daySum % 7];
}
