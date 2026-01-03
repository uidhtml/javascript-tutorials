// UIDHTML youtube channel 🙏

// Chapter - 49
// Modern Abstraction (Classes) in javascript - Phase-4

//ES5 Old way to write constructor function

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.attacked = function () {
//   console.log(`${this.name} attacked`);
// };

// const animal = new Animal("Tiger");
// animal.attacked();
// console.log(animal);

// 1 . What is class{} and its syntax
class Animal {
  constructor(name) {
    this.name = name;
  }

  attacked() {
    console.log(`${this.name} attacked`);
  }
}

// const animal = new Animal("Tiger");
// console.log(animal);

// 2. What is extends and super
// extends
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
const dog = new Dog("Tom", "Labrador");
console.log(dog.name);
console.log(dog.breed);
dog.attacked();

// 3. What is static method (Method on class not on instance)
// function User(name) {
//   this.name = name;
// }

// User.prototype.deleteUser = function () {};

// User.compareUserName = function (u1, u2) {
//   console.log(u1.name === u2.name);
// };

// const user1 = new User("Gautam");
// const user2 = new User("Gautam");

// console.log(user1, user2);
// User.compareUserName(user1, user2);

class User {
  constructor(name) {
    this.name = name;
  }

  static compareUserName(u1, u2) {
    console.log(u1.name === u2.name);
  }
}

const user1 = new User("Gautam");
const user2 = new User("Gautam");
console.log(user1, user2);
User.compareUserName(user1, user2);

// 4. Getters and setters (Modern Accessor)
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);
circle.area = 100;
console.log(circle.area);
console.log(circle.radius);

console.clear();
// 5. Private fields (#)
class BankAccount {
  #balance = 0;
  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  deposit(value) {
    this.#balance += value;
  }
}

const account = new BankAccount(100);
account.deposit(1000);
console.log(account.#balance);
