// UIDHTML youtube channel
let array = [1, true, "uidhtml"];
//console.log(array);

//Access data from array
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

//How many ways we can create array
//1. []
let arrayType1 = [];
console.log(arrayType1);
//2. new Array()
let arrayType2 = new Array();
console.log(arrayType2);

//If data exists
let x = 20;
let fullName = "Gautam";
let arrayWithDataExample = new Array(x, fullName); // [20, 'Gautam']
console.log(arrayWithDataExample);

let arrayWithDataExample2 = Array.of(x, fullName);
console.log(arrayWithDataExample2);

let example3 = new Array(x); // [20] will be [empty,empty,...x20]
console.log(example3);

let example4 = Array.of(x);
console.log(example4);

// Default fill data
let example5 = new Array(5).fill("Gautam");
console.log(example5);

let example6 = new Array(5, false, "uidhtml", 34).fill("Gautam", 1, 3);
console.log(example6);
