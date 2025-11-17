// UIDHTML youtube channel 🙏

// Chapter - 39 - indexOf() and lastIndexOf()

//indexOf()
const userRoles = ["hr", "employee", "admin", "director"];

//Function returm if role exists
function canUserUpdateDocument(roles, role) {
  if (roles.indexOf(role.toLocaleLowerCase()) !== -1) {
    return false;
  } else {
    return true;
  }
}
//console.log(canUserUpdateDocument(userRoles, "Employee"));

//Product id list
let productIds = [102, 24, 66, 94];

function toggleProduct(id) {
  const existingIndex = productIds.indexOf(id);
  if (existingIndex !== -1) {
    productIds.splice(existingIndex, 1);
    //console.log(`Product id removed: ${id}`);
  } else {
    productIds.push(id);
    //console.log(`Product id added: ${id}`);
  }
}

toggleProduct(24);
toggleProduct(94);
//console.log(productIds);
toggleProduct(203);
//console.log(productIds);

//lastIndexOf()
const userActionLog = [
  "login", // Index 0
  "view_page", // Index 1
  "add_item", // Index 2
  "view_page", // Index 3
  "edit_item", // Index 4
  "view_page", // Index 5
  "logout", // Index 6
];

//includes
console.log(userActionLog.includes("view_page3"));

const lastPageViewed = userActionLog.lastIndexOf("view_page");
console.log(lastPageViewed);

const nextStepTaken = userActionLog[lastPageViewed + 1];
//const nextStepTaken = userActionLog[5 + 1];
console.log(nextStepTaken);

//With object
const users = [
  { id: 1, name: "Gautam" },
  { id: 2, name: "Mohan" },
  { id: 3, name: "Ramesh" },
];

let objectToBeSerched = { id: 2, name: "Mohan" };

console.log(users.indexOf(objectToBeSerched));

let isUserExists = users.findIndex((user) => user.id == 5);

console.log(isUserExists);
