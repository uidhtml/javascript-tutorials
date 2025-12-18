// UIDHTML youtube channel 🙏

// Chapter - 46
// Mastering Object Literals - Phase - 1

//writable, enumerable and configurable (Property Descriptor)
let person = {
  name: "John",
};

//console.log(Object.getOwnPropertyDescriptor(person, "name"));

Object.defineProperty(person, "name", {
  value: "John",
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(person, "name"));

person.name = "Gautam";
//console.log(person);

// user data

const user = {
  secret: "jhgsdjhbds6sdt67t78da",
  name: "Gautam",
  age: 36,
};

console.log(user);

Object.defineProperty(user, "secret", {
  value: "jhgsdjhbds6sdt67t78da",
  enumerable: false,
  writable: false,
  configurable: false,
});
user.secret = "32bdh3geubfjn3jrh3j";
console.log(user.secret);

delete user.secret;
console.log(user);

console.log(Object.keys(user));

//Getters and setters (Accessor Descriptor)
const person2 = {
  firstName: "Gautam",
  lastName: "Kumar",
};

Object.defineProperty(person2, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },

  set(value) {
    const nameApart = value.split(" "); //['Rakesh', 'Kumar']
    this.firstName = nameApart[0];
    this.lastName = nameApart[1];
  },
});

person2.fullName = "Rakesh Kumar";
console.log(person2);

// Object protection
// PreventExtension(), seal(), freeze()

Object.preventExtensions(person2);
person2.age = 40; // Could not add property
//Lets delete property
delete person2.firstName;
person2.lastName = "Singh";
console.log(person2);

//seal()
const car = {
  name: "Toyota",
  model: 2025,
};

//Object.seal(car);
car.hasEngine = true;
delete car.name;
car.name = "Maruti";
console.log(car);

//Freeze()
Object.freeze(car);
car.name = "Honda";
delete car.name;
car.hasWheels = true;
console.log(car);
