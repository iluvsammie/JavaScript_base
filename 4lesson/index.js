// let username;

// username = window.prompt("What your username?");
// console.log(username);


let username;
document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("usN").textContent = `Hello ${username}`;
  // console.log(username);
}