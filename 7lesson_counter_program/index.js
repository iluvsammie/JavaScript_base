const decreaseBtn = document.getElementById("decreaseBtn");
const rasetBtn = document.getElementById("rasetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countlabel = document.getElementById("countlabel");
let count = 0;


increaseBtn.onclick = function(){
  count++;
  countlabel.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countlabel.textContent = count;
}

rasetBtn.onclick = function(){
  count = 0;
  countlabel.textContent = count;
}