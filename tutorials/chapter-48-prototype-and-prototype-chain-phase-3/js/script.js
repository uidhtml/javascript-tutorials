// UIDHTML youtube channel 🙏

// Chapter - 48
// prototype and prototype chain in javascript - Phase - 3

//Constructor pattern
function Enemy(name, health) {
  //New way
  if (!new.target) {
    return new Enemy(name, health); //Forcefullt create object with new keyword
  }
  this.name = name;
  this.health = health;
}

//Add methods to Enemy constructor function by prototype
Enemy.prototype.attack = function () {
  console.log(`${this.name} attacked.`);
};

Enemy.prototype.speak = function () {
  console.log(`${this.name} speak.`);
};

Enemy.prototype.drink = function () {
  console.log(`${this.name} drink.`);
};

const enemy1 = new Enemy("Tiger", 100);
console.log(enemy1);
enemy1.attack();

const enemy2 = new Enemy("Lion", 400);
console.log(enemy2);
enemy2.attack();

//Machanism of .prototype and .__proto__
console.log(enemy1.__proto__);
console.log(enemy1.__proto__ === Enemy.prototype);

//Prototype chain
console.clear();

//Level 3
const grandPapa = {
  assets: "Land",
  house: "Swarg",
};

//Level 2
const father = Object.create(grandPapa);
father.car = "BMW";

//Level 1
const child = Object.create(father);
child.bike = "Yamaha";

console.log(child.bike);
console.log(child.house);
console.log(child);

//Object inherited property
let x = 20;
console.log(x);
console.log(x.toString());

let arr = [1, 2, 3];
console.log(arr);
console.log(arr.toString());

let func = function () {};
console.log(func.toString());

//Connecting two constructor functions
console.clear();
function Animal(name) {
  this.name = name;
}

Animal.prototype.attack = function () {
  console.log(`${this.name} attacked`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.isPet = true;

const myDog = new Dog("Tom", "German Sheaphored");
console.log(myDog);
myDog.attack();

console.log(myDog.isPet);

const myDogClone = new myDog.constructor("Tommy", "labrador");
console.log(myDogClone);
