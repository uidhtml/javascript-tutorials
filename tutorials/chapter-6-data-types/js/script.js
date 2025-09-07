//Data types
//Primitive Data types
//number
let x = 20;
let y = -34;
// console.log(x);
// console.log("20");
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof "20");

//String
let username = "Gautam";
//console.log(typeof username);
const username2 = new String("Gautam");

//Boolean
let isTrue = true;
//console.log(typeof isTrue);

//undefined
let city;
// console.log(city);
// console.log(typeof city);

//null
let user = null;
// console.log(typeof user);
let obj = {};
// console.log(typeof obj);

// console.log(typeof user === "object");
// console.log(user === null);
// console.log(obj === null);

//Bigint
//safe integer 2^53 - 1
let largeNumber = 6544542747257n;
//console.log(typeof largeNumber);

//Symbols
let userObj = {
  name: "Gautam",
};
userObj["id"] = 10;
// console.table(userObj);
// userObj["id"] = 34;
// console.table(userObj);

// let id1 = Symbol("id");
// userObj[id1] = 10;
// console.table(userObj);
// let id2 = Symbol("id");
// userObj[id2] = 55;
// console.table(userObj);

//Composite Datatype
//Array
let array = [1, "Gautam", true, { channelName: "uidhtml" }];
//console.log(typeof array);
array[1] = "Mukesh";

//Object
let dummyObj = {};
console.log(typeof dummyObj);
dummyObj["id"] = 1;
dummyObj["add"] = function add() {};

//function
function func1() {}
console.log(typeof func1);
console.log(func1 instanceof Object);

function Car() {}
console.log(typeof new Car());

//Date
console.log(typeof new Date());
