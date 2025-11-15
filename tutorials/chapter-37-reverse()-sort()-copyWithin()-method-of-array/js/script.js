// UIDHTML youtube channel 🙏

// Chapter - 37 - reverse(), sort() and copyWithin()

//reverse()
//with array of string
let strArrayForReverse = ["Mumbai", "Delhi", "Chennai"];
strArrayForReverse.reverse();
//console.log(strArrayForReverse);

//With array numbers
let numArrayForReverse = [1, 2, 3, 4, 5, 6, 7, 8];
numArrayForReverse.reverse();
//console.log(numArrayForReverse);

//With object
let objArrayForReverse = [
  { name: "Gautam", age: 32 },
  { name: "Ramesh", age: 35, address: { city: "Patna" } },
  [4, 3, 5, 6, 7],
  true,
  ["Mumbai", "Delhi", "Chennai", "Kolkata"],
];
objArrayForReverse.reverse();
//console.log(objArrayForReverse);

//sort()
//With array strings, element starting with capital letter
let strArrayForSortWithCapitalLetter = [
  "Apple",
  "Mango",
  "Banana",
  "Orange",
  "Grapes",
  "Watermelon",
  "Pineapple",
  "Strawberry",
];
strArrayForSortWithCapitalLetter.sort();
console.log(strArrayForSortWithCapitalLetter);

//With array strings, element starting with small and capital letter
let strArrayForSortWithSmallLetter = [
  "Apple",
  "mango",
  "Banana",
  "Orange",
  "grapes",
  "watermelon",
  "Pineapple",
  "strawberry",
];
strArrayForSortWithSmallLetter.sort((a, b) => a.localeCompare(b));
console.log(strArrayForSortWithSmallLetter);

//With array numbers
let numArrayForSort = [6, 2, 3, 4, 8, 6, 3, 0, 1, 11, 21];
numArrayForSort.sort((a, b) => b - a);
console.log(numArrayForSort);

//With array Object
let objArrayForSort = [
  { productName: "TV", price: 26456.45, category: "electric" },
  { productName: "Table", price: 3045.75, category: "Furniture" },
  { productName: "Spoon", price: 243.45, category: "Kitchen" },
  { productName: "AC", price: 56034.75, category: "electric" },
];
objArrayForSort.sort((a, b) => b.category.localeCompare(a.category));
console.log(objArrayForSort);

console.clear();
//copyWithin()
let arr = ["Apple", "Mango", "Banana", "Orange", "Kiwi", "Pineapple"];

//target: on which index you want to paste copied data
//start: From which index you want to copy the data
//end: Till which index you want to copy data -1
//Copied data : "Orange", "Kiwi"
arr.copyWithin(1, -4, -2);

//arr = ["Apple", "Mango", "Orange", "Kiwi", "Kiwi", "Pineapple"];
console.log(arr);
