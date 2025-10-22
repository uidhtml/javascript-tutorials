// UIDHTML youtube channel 🙏

//Array
let cityArray = ["Mumbai", "Delhi", "Kolkata", "Chennai", "Patna", "Bangaluru"];

//splice() method
//Syntax
//array.splice(startIndex, deleteCount, item1,item2,...)

let newArray1 = cityArray.splice();
console.log(newArray1);

//With startIndex
//let newArray2 = cityArray.splice(1);
//console.log(newArray2);

//With delete count
//console.log(cityArray);
// let newArray3 = cityArray.splice(1, 3);
// console.log(newArray3);
// console.log(cityArray);

//With item1, item2
// let newArray4 = cityArray.splice(1, 3, "Gujrat", "Haryana");
// console.log(newArray4);
// console.log(cityArray);

//No data deleted only inserted
let newArray5 = cityArray.splice(1, 0, "Gujrat", "Haryana");
console.log(newArray5);
console.log(cityArray);

//Negative indexes
let newArray6 = cityArray.splice(-3, 2);
console.log(newArray6);
console.log(cityArray);
