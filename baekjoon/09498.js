const item = "100";
const input = parseInt(item.toString().trim().split(" "));
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

switch (true) {
  case input > 89:
    console.log("A");
    break;
  case input > 79:
    console.log("B");
    break;
  case input > 69:
    console.log("C");
    break;
  case input > 59:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
