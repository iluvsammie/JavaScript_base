// let day = 9;

// switch (day) {
//   case 1:
//     console.log("It is Monday");
//     break;
//   case 2:
//     console.log("It is Tuesday");
//     break;
//   case 3:
//     console.log("It is Wednesday");
//     break;
//   case 4:
//     console.log("It is Thursday");
//     break;
//   case 5:
//     console.log("It is Friday");
//     break;
//   case 6:
//     console.log("It is Saturday");
//     break;
//   case 7:
//     console.log("It is Sunday");
//     break;
//   default:
//     console.log(`${day} is not a day`)
// }

let testScore = 95;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 75:
    letterGrade = "B";
    break;
  case testScore >= 50:
    letterGrade = "C";
    break;
  case testScore >= 25:
    letterGrade = "FX";
    break;
  case testScore >= 0:
    letterGrade = "F";
    break;
  default:
    console.log(`The ${testScore} is not a score`)

}

console.log(letterGrade);