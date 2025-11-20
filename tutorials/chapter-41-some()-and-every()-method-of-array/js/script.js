// UIDHTML youtube channel 🙏

// Chapter - 41
// every() and some() methods

//every()
const courseModules = [
  { id: 1, title: "Intro to JS", isWatched: false },
  { id: 2, title: "Variables", isWatched: false },
  { id: 3, title: "Functions", isWatched: true },
  { id: 4, title: "Objects", isWatched: true },
];

const isCourseFullyWatched = courseModules.every((module) => module.isWatched);
console.log(isCourseFullyWatched);

//Some()
const isAnyModuleCompleted = courseModules.some((module) => {
  return module.isWatched;
});
console.log(isAnyModuleCompleted);

//Real world example
const cart = [
  { item: "Laptop", inStock: true, price: 1000 },
  { item: "Mouse", inStock: false, price: 50 },
  { item: "Monitor", inStock: true, price: 300 },
];
const coupons = [
  { code: "SUMMER20", isValid: false },
  { code: "WELCOME10", isValid: true },
];

const isCartReady = cart.every((cartItem) => cartItem.inStock);
const isDiscountAvailable = coupons.some((coupon) => coupon.isValid);

if (!isCartReady) {
  console.log("Some cart item is out of stock");
}
if (isDiscountAvailable) {
  console.log("You are eligible for discount");
}

//if array is empty
let arr = [];
const result = arr.some((item) => {
  return item % 2 === 0;
});

console.log(result);

//My custom every function
const numArr = [3, 5, 7, 9];
function myEveryFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let processedItem = callback(array[i]);
    if (!processedItem) {
      return false;
    }
  }
  return true;
}

const isAllNumberEven = myEveryFunc(numArr, (num) => num % 2 === 0);
console.log(isAllNumberEven);

//My custom some function
function mySomeFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let processedItem = callback(array[i]);
    if (processedItem) {
      return index;
    }
  }
  return false;
}
const isAnyNumberEven = mySomeFunc(numArr, (num) => num % 2 === 0);
console.log(isAnyNumberEven);
