// Normal if else
// let anyPerson = "Mukesh";
// let officialPerson = "";
// if (anyPerson == "Gautam") {
//   officialPerson = anyPerson;
// } else {
//   officialPerson = "Person is not an official person";
// }

// console.log(officialPerson);

//Bi-directional/Ternary operator
// let anyPerson = "Gautam";
// let officialPerson =
//   anyPerson == "Gautam" ? anyPerson : "Person is not an official person";

// console.log(officialPerson);

// Nullish operator (??)
// let anyPerson;
// let officialPerson = anyPerson ?? "Person is not an official person";
// console.log(officialPerson);

// Difference between Nullish operator (??) and OR operator (||)
let anyPerson = false;
let officialPerson = anyPerson ?? "Person is not an official person";
console.log("Nullish result: ", officialPerson);

//Normal if-else
if (anyPerson) {
  officialPerson = anyPerson;
} else {
  officialPerson = "Person is not an official person";
}

console.log("if-else result: ", officialPerson);

// OR (||) operator
officialPerson = anyPerson || "Person is not an official person";
console.log("OR result: ", officialPerson);
