const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribe`;
  }
  else {
    subResult.textContent = `You are NOT subscribe`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with VISA`;
  }

  else if (masterBtn.checked) {
    paymentResult.textContent = `You are paying with Mastercard`;
  }

  else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  }

  else {
    paymentResult.textContent = `You must select a payment type`;
  }
  // if (!myCheckbox.checked) {
  //   subResult.textContent = `You are NOT subscribe`;
  // }

}
