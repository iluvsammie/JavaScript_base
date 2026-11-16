// let username = "Assems";

// username.charAt(0);

// console.log(username.charAt(2));
// username.indexOf("e");
// username.lastIndexOf("s");
// console.log(username.lastIndexOf("s"));

// username.length;
// console.log(username.length);

// // username = username.trim();
// // username = username.toUpperCase();
// // username = username.toLowerCase();
// // username = username.repeat(3);

// let result = username.startsWith(" ");
// console.log(result);

// if (result) {
//   console.log("Your username can't begin with ' ' ");
// }
// else {
//   console.log(username)
// }

// let result2 = username.endsWith(" ");
// console.log(result2);

// if (result2) {
//   console.log("Your username can't end with ' ' ");
// }
// else {
//   console.log(username)
// }

// let result3 = username.includes(" ");
// console.log(result3);

// if (result3) {
//   console.log("Your username can't include ' ' ");
// }
// else {
//   console.log(username)
// }

let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "");

// phoneNumber = phoneNumber.padStart(20, "0");
phoneNumber = phoneNumber.padEnd(20, "0");

console.log(phoneNumber);