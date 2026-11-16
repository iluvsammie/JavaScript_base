
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random()*(max-min+1)) + min;


// // let randomNum = Math.floor(Math.random()*6) + 1;

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 10;
let randomNum;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
  randomNum = Math.floor(Math.random()*(max-min+1)+min);
  randomNum2 = Math.floor(Math.random()*(max-min+1)+min);
  randomNum3 = Math.floor(Math.random()*(max-min+1)+min);
  myLabel.textContent = `The random number is ${randomNum}`;
  myLabel2.textContent = `The second random number is ${randomNum2}`;
  myLabel3.textContent = `The third random number is ${randomNum3}`;

}