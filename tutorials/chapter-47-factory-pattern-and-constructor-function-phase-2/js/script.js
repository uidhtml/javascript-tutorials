// UIDHTML youtube channel 🙏

// Chapter - 47
// Factory pattern and constructor function in javascript - Phase - 2

//Factory pattern
function createAnimal(name) {
  //console.log(this);
  return {
    name: name,
    attack: function () {
      //console.log(this);
      return `${this.name} attacked`;
    },
  };
}

const tiger = createAnimal("Tiger");
const lion = createAnimal("Lion");

//console.log(tiger.attack());
//console.log(lion.attack());

//closure example the super power of factory pattern

function createSecureVault(securityCode) {
  let valultStatus = "locked";

  return {
    unlock: function (attempt) {
      if (securityCode === attempt) {
        valultStatus = "unlocked";
      }
    },
    getStatus: function () {
      return valultStatus;
    },
  };
}

const vault1 = createSecureVault("1234");
vault1.unlock("1234");
console.log(vault1.getStatus());

const vault2 = createSecureVault("1234");
vault2.getStatus();

//Constructor pattern
function Enemy(name, health) {
  //Old way
  // if (!(this instanceof Enemy)) {
  //   return new Enemy(name, health); //Forcefullt create object with new keyword
  // }
  //New way
  if (!new.target) {
    return new Enemy(name, health); //Forcefullt create object with new keyword
  }

  this.name = name;
  this.health = health;
  this.attack = function () {};
}
console.log(Enemy("New Tiger", 100));
const newTiger = Enemy("New Tiger", 100);
const newLion = Enemy("New Lion", 300);

console.log(newTiger);
console.log(newLion);
