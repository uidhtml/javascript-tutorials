// UIDHTML youtube channel 🙏

//FIFO (First In First Out)

//Array
let array = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇"];

//unshift() method with single data
array.unshift("pineapple");
console.log(array);

//Unshift() method with multiple data
array.unshift("Orange", "Guava");
console.log(array);

//Unshift() method with different type data
array.unshift(23, true, undefined, null, {
  username: "Gautam",
  channelName: "uidhtml",
});
console.log(array);

//shift() method
const firstPushedData = array.shift();
console.log(firstPushedData);
console.log(array);

// Mutation of orinal array
//unshift() and shift() modifies orinal array
for (let i = array.length; i > 0; i--) {
  console.log(array.shift());
}
console.log(array);

// shift method Empty array
console.log(array.shift());
