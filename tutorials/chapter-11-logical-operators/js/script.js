// logical AND operator (&&)
// let x = true;
// let num = 0; // falsey value
// let userName = "s";
// let hasAddress = true;
// let profilePic = null;

// if (x && num && userName && hasAddress && profilePic) {
//   console.log("All variables are true");
// } else {
//   console.log("Any one variable is false");
// }

// logical OR operator (||)
// let x = true;
// let num = 0; // falsey value
// let userName = "s";
// let hasAddress = true;
// let profilePic = null;

// if (x || num || userName || hasAddress || profilePic) {
//   console.log("Any one variable is true");
// } else {
//   console.log("All variables are false");
// }

// logical Not operator (!)
// let x = false;

// if (!x) {
//   console.log("Variable is false");
// } else {
//   console.log("Variable is true");
// }

// combination of logical operator (||, && and !)
let x = false;
let num = 20;
let userName = "";
let hasAddress = true;
let profilePic = null;

if (!x || num || hasUserData()) {
  console.log("Any one variable is true");
} else {
  console.log("All variables are false");
}

function hasUserData() {
  return !profilePic && userName && hasAddress;
}
