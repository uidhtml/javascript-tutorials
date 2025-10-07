// UIDHTML youtube channel 🙏

//Array
let fruitsArray = ["Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇"];

// Iteration array with for-of() for() loop

for (const fruit of fruitsArray) {
  // code to be executed for each fruit
  console.log(fruit);
}

// Over string
for (const char of "Uidhtml") {
  // code to be executed
  console.log(char);
}

// for-in loop
Array.prototype.newFruit = "Mango";
for (const fruit of fruitsArray) {
  // code to be executed
  console.log(fruit);
}

//Destructure
const users = [
  { name: "Gautam", age: 32 },
  { name: "Mohan", age: 23 },
];

for (const { name, age } of users) {
  console.log(`Name: ${name}, age: ${age}`);
}

//Break and continue

//Break
for (const fruit of fruitsArray) {
  // code to be executed
  if (fruit === "Cherry 🍒") {
    break;
  }
  console.log(fruit);
}

//Continue
for (const fruit of fruitsArray) {
  // code to be executed
  if (fruit === "Cherry 🍒") {
    continue;
  }
  console.log("Continue Result:", fruit);
}

// Directly on object
const user = { name: "Gautam", age: 32 };

//Object.keys(), Object.entries(), Object.values()
//Object.keys()
for (const key of Object.keys(user)) {
  // code to be executed
  console.log(key);
  console.log(user[key]);
}

//Object.entries()
console.log(Object.entries(user));
for (const [key, value] of Object.entries(user)) {
  // code to be executed
  console.log(`${key}, ${value}`);
}

//Object.values()
console.log(Object.values(user));
for (const value of Object.values(user)) {
  // code to be executed
  console.log(`value:  ${value}`);
}

// Directly on object
for (const elem of user) {
  //code to be executed
  console.log(elem);
}
