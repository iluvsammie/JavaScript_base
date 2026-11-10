const PI = 3.14159;
let radius;
let circumference;


// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2*PI*radius;
// console.log(circumference);

document.getElementById("mySub").onclick = function(){
  radius = document.getElementById("rad").value ;
  radius = Number(radius);
  circumference = 2*PI*radius;
  document.getElementById("myH3").textContent = `The circumference is ${circumference} `;
}