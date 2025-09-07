// About var variable
var channelName = "uidhtml";
console.log(channelName);
var channelName = "uidhtml channel";
console.log(channelName);

//About let variable
let channelAuthor = "Gautam";
console.log(channelAuthor);
channelAuthor = "Mukesh";
console.log(channelAuthor);

//About const variable
const channelAddress = "India";
console.log(channelAddress);

//Function scope
function showChannelName() {
  if (true) {
    var channelName = "uidhtml";
    console.log(channelName);
  }

  console.log(channelName);
}
showChannelName();
console.log(channelName);

//Block scope
function showChannelName() {
  if (true) {
    let channelName = "uidhtml";
    console.log(channelName);
  }

  console.log(channelName);
}
showChannelName();
console.log(channelName);

//Hoisting
// global object on browser = window
let x;
console.log(x);

const y = 40;
console.log(y);

//console.log(z);
var z = 30;

console.log(sum);

function sum() {
  console.log(10 + 20);
}

//defined and not defined
let p;
console.log(p);

//Call stack
function child() {
  console.log("I am child function");
}
function parent() {
  child();
}

function grandParent() {
  parent();
}

grandParent();
console.log("hello I m here");
