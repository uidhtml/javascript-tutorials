// UIDHTML youtube channel 🙏

// Chapter - 33 - reduce() method
/*
Syntax with normal function
  array.reduce(
    function(accumulator, element, currentIndex, array) {}, 
    initialValue
  );

  array.map(function(element, currentIndex, array){})
  or 

Syntax with arrow function
  array.reduce(
    (accumulator, element, currentIndex, array) => {}, 
    initialValue
  );
*/

//Basic example
//Array of numbers
const numArray = [1, 2, 3, 4, 5];
const sumofAllNumbers = numArray.reduce(
  (previousValue, element) => previousValue + element,
  0
);

console.log(sumofAllNumbers);

//Demo with forEach
let total = 0;
numArray.forEach((element) => {
  total = total + element;
});
console.log(total);

//Example 1
//Array of objects
const orders = [
  { id: 1, name: "TV", price: 48000, quantity: 2 },
  { id: 2, name: "Fridge", price: 25200, quantity: 1 },
  { id: 3, name: "JBL-100 Speaker", price: 54400, quantity: 3 },
  { id: 4, name: "Washing Machine", price: 17230, quantity: 1 },
  { id: 5, name: "Fridge convertable", price: 32800, quantity: 4 },
];

const totalQuantity = orders.reduce(
  (total, order) => total + order.quantity,
  0
);
console.log(totalQuantity);

//If data not returned from return
const totalPriceOfOrder = orders.reduce((accu, order) => {
  if (order.quantity > 1) {
    return accu + order.price;
  } else {
    return accu;
  }
}, 0);
console.log(totalPriceOfOrder);

//Example 2
//Convert array of object to plain array
const employeesArray = [
  { id: 1, name: "Rakesh", designation: "Developer" },
  { id: 2, name: "Rahul", designation: "QA Engineer" },
  { id: 3, name: "Mahesh", designation: "Developer" },
  { id: 4, name: "Raushan", designation: "Frontend Dev" },
  { id: 5, name: "Hambrum", designation: "Designer" },
  { id: 6, name: "Harish", designation: "Designer" },
];

const employeeNameArray = employeesArray.reduce((accu, employee) => {
  return [...accu, employee.name];
}, []);
console.log(employeeNameArray);

//Example 3
//Group data with a key
const users = [
  { name: "Harish", country: "Mumbai" },
  { name: "Mohan", country: "New Delhi" },
  { name: "Kunal", country: "Mumbai" },
  { name: "Rajesh", country: "Chennai" },
  { name: "Rakesh", country: "Mumbai" },
];

let obj = {};
obj["mumbai"] = [{ name: "Harish", country: "Mumbai" }];
console.log(obj);

const groupOfUsers = users.reduce((accu, user) => {
  accu[user.country] = accu[user.country] || [];
  accu[user.country].push(user);
  return accu;
}, {});

console.log(groupOfUsers);

/*
{
  'mumbai': [
    { name: "Harish", country: "Mombai" },
    { name: "Kunal", country: "Mumbai" }
  ],
  'New Delhi': [
    { name: "Mohan", country: "New Delhi" },
  ],
  ....
}
*/

//Example 4
//Convert Array to an object
const fruitsArray = [
  "Apple🍎",
  "Banana🍌",
  "Kiwi🥝",
  "Cherry🍒",
  "Banana🍌",
  "Grapes🍇",
  "Kiwi🥝",
  "Banana🍌",
  "Cherry🍒",
  "Apple🍎",
  "Grapes🍇",
  "Cherry🍒",
  "Cherry🍒",
  "Pineapple🍍",
];

const fruitsQuantity = fruitsArray.reduce((accu, fruit) => {
  return {
    ...accu,
    [fruit]: (accu[fruit] || 0) + 1,
  };
}, {});
console.log(fruitsQuantity);
// {'apple': 3, 'banana': 1,...}

//Example 5
//Create an index signature for an object
const toys = [
  { id: 121, name: "car", price: 654 },
  { id: 123, name: "Truck", price: 557 },
  { id: 151, name: "Ball", price: 50 },
  { id: 162, name: "Bicycle", price: 100 },
  { id: 154, name: "Bike", price: 300 },
  { id: 178, name: "Scooter", price: 80 },
];

const indexSignOfToys = toys.reduce((accu, toy) => {
  accu[toy.id] = toy;
  return accu;
}, {});

console.log(indexSignOfToys);
console.log(indexSignOfToys[121]);
