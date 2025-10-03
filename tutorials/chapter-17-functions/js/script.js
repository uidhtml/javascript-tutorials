//Function
// Syntax
function anyName() {
  console.log("Hello uidhtml"); // function Defination
} // Function declaration

//Types of function
//Named function
function addtwoNumber() {
  console.log("Named function called:", 2 + 3);
}

addtwoNumber();

//Anonymous function
let sumOfTwoNumber = function () {
  console.log("Anonymous function called: ", 2 + 3);
};

sumOfTwoNumber();

//Parameterized function
function multiply(x, y) {
  //x, y parameter
  console.log(x);
  console.log(y);
  console.log("Anonymous function called: ", x * y);
}

multiply(4, 5); // 4,5 are arguments

let divide = function (x, y) {
  //x, y parameter
  console.log(x);
  console.log(y);
  console.log("Divide function called: ", x / y);
};

divide(4, 5); // 4,5 are arguments

//Immediately invoked function
(function (x, y) {
  console.log("Immediately invoked function called: ", x - y);
})(6, 3);

//Arrow function (ES6)
let subtract = (x, y) => x - y;
console.log(subtract(7, 2));

class MyClass {
  sum() {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  }
  showThisLocally() {
    setTimeout(() => {
      console.log(this);
    }, 3000);
  }
}

let myClassInstance = new MyClass();
//myClassInstance.sum();
//myClassInstance.showThisLocally();

//Generator function
function* myGenFunc(x, y) {
  yield x + y;
  yield x - y;
  yield x * y;
}

let genFuncObj = myGenFunc(30, 10);

console.log(genFuncObj.next());
console.log(genFuncObj.next());
console.log(genFuncObj.next());
console.log(genFuncObj.next());

//Async function
function resolveFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolve function called");
    }, 2000);
  });
}

async function callingResolve() {
  console.log("Calling Resolved function");
  let result = await resolveFunction();
  console.log(result);
  console.log("Function finished");
}
//callingResolve();

// function argument
function sum(...args) {
  return args;
}
let x = sum(4, 9, 16, 25, 29);
console.log(x);

//return statement
function myFunc() {
  let x = 10;
  let y = 20;
  return x;
  return y;
}
console.log(myFunc());
