// UIDHTML youtube channel 🙏

//FIFO

//Array
let array = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇"];

//Push() method with single data
array.push("pineapple");
console.log(array);

//Push() method with multiple data
array.push("Orange", "Guava");
console.log(array);

//Push() method with different type data
array.push(23, true, undefined, null, {
  username: "Gautam",
  channelName: "uidhtml",
});
console.log(array);

//pop() method
const lastPushedData = array.pop();
console.log(lastPushedData);
console.log(array);

// Mutation of orinal array
//push() and pop() modifies orinal array
for (let i = array.length; i > 0; i--) {
  console.log(array.pop());
}
console.log(array);

// pop method Empty array
console.log(array.pop());
