// let age = 14;

// if(age >= 18){
//   console.log("Welcome to site");
// }
// else{
//   console.log("ket bar")
// }

// let time = 11;

// if(time<=12){
//   console.log("Good morning! ");
// }
// else{
//   console.log("Good afternoon! ");
// }

// let isStudent = true;
// if(isStudent){
//   console.log("You are student")
// }
// else{
//   console.log("You are not")
// }

// let age = 18;
// let hasLicense = true;

// if(age>=16){
//   console.log("you are old enough to drive");
//   if(hasLicense){
//     console.log("You habe your license!");
//   }
//   else{
//     console.log("You do not have your license yet")
//   }
// }
// else{
//   console.log("You must be 16+ to have a license");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("res");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    resultElement.textContent = "You are TOO OLD enter this site";
    // console.log("You are TOO OLD enter this site")
  }
  else if (age >= 18) {
    resultElement.textContent = "You are 18+";
    // console.log("You are 18+")
  }
  else if (age == 0) {
    resultElement.textContent = "You can't enter. You are just born.";
    // console.log("You can't enter. You are just born. ")
  }
  else if (age < 0) {
    resultElement.textContent = "Your age can't be below 0";
    // console.log("Your age can't be below 0")
  }
  else {
    resultElement.textContent = "You are not";
    // console.log("You are not")
  }

}

// if(age >= 100){
//   console.log("You are TOO OLD enter this site")
// }
// else if(age >=18){
//   console.log("You are 18+")
// }
// else if( age == 0){
//   console.log("You can't enter. You are just born. ")
// }
// else if(age < 0){
//   console.log("Your age can't be below 0")
// }
// else if(age >= 100){
//   console.log("You are TOO OLD enter this site")
// }
// else{
//   console.log("You are not")
// }


