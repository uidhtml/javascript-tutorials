// UIDHTML youtube channel 🙏

//Array
let fruitsArray = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇"];

//slice() method
//Syntax
let newArray1 = fruitsArray.slice(1, 2);
console.log(newArray1);

//Basic slicing (Getting portion of an aaya from middle)
let newArray2 = fruitsArray.slice(1, 3);
console.log(newArray2);

//Slice to the end (Omitting endIndex)
let newArray3 = fruitsArray.slice(1);
console.log(newArray3);

//Using Nagetive Indexes
//let array = fruitsArray.slice(startIndex, endIndex);
let newArray4 = fruitsArray.slice(-1);
console.log(newArray4);
let newArray5 = fruitsArray.slice(-2);
console.log(newArray5);
let newArray6 = fruitsArray.slice(-2, -1);
console.log(newArray6);

//cloning an array (Omitting all papmeters)
let newArray7 = fruitsArray.slice();
console.log(newArray7);
