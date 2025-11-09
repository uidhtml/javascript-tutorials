// UIDHTML youtube channel 🙏

// Chapter - 35 - Object.groupBy()
/*
Syntax
  const resultInGroup = Object.groupBy(
    Array, 
    (element, index) => groupName
  )
*/

//Group data with a key
const users = [
  { name: "Harish", city: "Mumbai" },
  { name: "Mohan", city: "New Delhi" },
  { name: "Kunal", city: "Mumbai" },
  { name: "Rajesh", city: "Chennai" },
  { name: "Rakesh", city: "Mumbai" },
];

const groupOfCity = users.reduce((accu, user) => {
  accu[user.city] = accu[user.city] || [];
  accu[user.city].push(user);
  return accu;
}, {});

console.log(groupOfCity);

//With Object.groupBy()
const citiesGroup = Object.groupBy(users, (user, index) => user.city);
console.log(citiesGroup);

//Array of numbers
const numArray = [14, 245, 325, 54, 355];

const numGroup = Object.groupBy(numArray, (num, index) => {
  return num > 54 ? "greater" : "smaller";
});

console.log(numGroup);

//With filter
const dataWithFilter = numArray.filter((num, index) => {
  return num > 54;
});

console.log(dataWithFilter);

// Map.groupBy()
// So to know we need to understand the difference between Object, Map and Set data type, So stay tunened, next video will come on that
// Then again Map.groupBy() we will learn

// Otherwise lets see the example available on MDN
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// The key can be modified and still used
restock["fast"] = true;
console.log(restock);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// A new key can't be used, even if it has the same structure!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
