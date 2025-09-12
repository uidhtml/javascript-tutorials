"use strict";
// x = 10;
// console.log(window.x);

// function createLeak() {
//   leakedVariable = "I am a global variable!"; // Silently creates a global variable `leakedVariable`
// }
// createLeak();
// console.log(window.leakedVariable); // "I am a global variable!"

// function showThis() {
//   console.log(this);
// }
// showThis(); // In a browser, this logs the `window` object.

// function duplicateParams(a, a, b) {
//   console.log(a); // Logs 2, the value of the last 'a'
// }
// duplicateParams(1, 2, 3);

let codeString = "let x = 10; x + 5;";
let result = eval(codeString);
console.log(x); // Output: 15

// let x = {a: 20};
// console.log(delete Object.prototype)


    