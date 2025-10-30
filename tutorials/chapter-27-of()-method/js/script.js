// UIDHTML youtube channel 🙏

//Array
let fruitsArray = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇"];

//Before es6
let arr = ["Apple 🍎", 1, true, { x: 20 }];
console.log(arr);
let arr2 = new Array("Apple 🍎", 1, true, { x: 20 });
console.log(arr2);

let arr3 = new Array(2, 3);
console.log(arr3);

let arr4 = new Array(2);
console.log(arr4);

let arr5 = new Array("uidhtml");
console.log(arr5);

//of() method
let arrayWithOfMethod = Array.of(2);
console.log(arrayWithOfMethod);
let arrayWithOfMethod2 = Array.of("Apple 🍎", 1, true, { x: 20 });
console.log(arrayWithOfMethod2);
