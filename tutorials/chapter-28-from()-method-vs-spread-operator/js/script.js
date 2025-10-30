// UIDHTML youtube channel 🙏

const numList = document.getElementById("numberList");
console.log(numList.children);

const numArray = Array.from(numList.children, (x) => x.innerHTML);
console.log(numArray);

const arrayFromSpread = [...numList.children];
console.log(arrayFromSpread);

//Shallow copy
let myArray = [1, 2, { x: 20, city: ["Patna", "Delhi"] }];
const array1 = Array.from(myArray);
console.log(array1);

//Example of shallow copy
array1[0] = "p";
console.log(array1);
console.log(myArray);

//Checking deep copy
array1[2].x = 40;
console.log(array1);
console.log(myArray);

//using map

const array2 = Array.from([2, 3, 4, 5], (item) => item * 2);
console.log(array2);

let numArray2 = [2, 3, 4, 5];
const array3 = Array.from(numArray2);
console.log(array3);
const array4 = [...numArray2];
console.log(array4);

//String to array
let str = "uidhtml";
console.log(Array.from(str));
