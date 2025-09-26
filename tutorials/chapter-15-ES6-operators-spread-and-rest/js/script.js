// const frontEnd = ["React", "Vue", "Svelte"];
// console.log("Frontend:", frontEnd);

// const backEnd = ["Node.js", "Express", "NestJS"];
// console.log("backend: ", backEnd);

// const language = [...frontEnd, ...backEnd];
// language.push("Angular");
// console.log("Language: ", language);
// console.log("Frontend:", frontEnd);
// console.log("backend: ", backEnd);

//With Array
// Before ES6
// const original = ["a", "b", "c"];
// const sliceCpy = original.slice(0, original.length);
// sliceCpy.push("d");
// console.log(original); // Output: ['a', 'b', 'c'] (The original is safe!)
// console.log(sliceCpy); // Output: ['a', 'b', 'c', 'd']

// // After ES6
// const copy = [...original];
// copy.push("d"); // Modify the copy
// console.log(original); // Output: ['a', 'b', 'c'] (The original is safe!)
// console.log(copy); // Output: ['a', 'b', 'c', 'd']

//With Object
// const userProfile = {
//   name: "Alex",
//   email: "alex@example.com",
//   address: {
//     country: "USA",
//   },
// };

// const userSettings = {
//   theme: "dark",
//   email: "alex.doe@work.com", // This will overwrite the original email
// };

// const completeUser = {
//   ...userProfile,
//   ...userSettings,
//   lastLogin: "2025-09-24",
// };

// completeUser.name = "Gautam";
// completeUser.address.country = "India";
// console.log("Complete User: ", completeUser);
// console.log("userProfile: ", userProfile);
/*
Output:
{
  name: 'Alex',
  email: 'alex.doe@work.com', // The later value for 'email' was used
  theme: 'dark',
  lastLogin: '2025-09-24'
}
*/

// const numbers = [12, 88, 34, 5];

// // Instead of Math.max(12, 88, 34, 5)
// const maxNumber = Math.max(...numbers);
// // const maxNumber = Math.max(12, 88, 34, 5);

// console.log(maxNumber); // Output: 88

// Rest operator
// A function that calculates the sum of all numbers passed to it.
// function sum(...numbers) {
//   console.log(numbers);
//   // 'numbers' is now a real array.
//   return numbers.reduce((total, current) => total + current, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(10, 20, 30, 40, 50)); // Output: 150
// console.log(sum());

const leaderboard = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Get the winner, runner-up, and everyone else.
const [winner, runnerUp, ...everyoneElse] = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
];

// console.log(["Alice", "Bob", ["Charlie", "David", "Eve"]]);

// console.log(winner); // Output: 'Alice'
// console.log(runnerUp); // Output: 'Bob'
// console.log(everyoneElse); // Output: ['Charlie', 'David', 'Eve']

// A logging function that takes a required category and then any number of messages.
function logMessage(category, ...messages) {
  const timestamp = new Date().toISOString();
  console.log(`${category.toUpperCase()}, ${timestamp} `);

  messages.forEach((message) => {
    console.log(`  - ${message}`);
  });
}

logMessage("INFO", "User logged in", "Accessed dashboard page");
// Output:
// [2025-09-25T....] [INFO]
//   - User logged in
//   - Accessed dashboard page

logMessage("ERROR", "Failed to connect to database");
// Output:
// [2025-09-25T....] [ERROR]
//   - Failed to connect to database
