// UIDHTML youtube channel 🙏

// Chapter - 45
// Object

//What is an Object?

//1. Basic object - {}
const car = {
  brand: "Maruti",
  model: "Alto",
  noOfCars: 100000,
  isElectric: false,
  start: function () {
    //method
    console.log("Car engine is now ON");
  },
};
console.log(car);
//2. Add property later
const bike = {};
bike.brand = "TVS";
bike.model = "Apache RTR";
bike["no of bikes"] = 200000;
bike["isElectric"] = false;
bike.start = () => {
  console.log("Bike's engine is now ON");
};
console.log(bike["no of bikes"]);
//3. new Object()
const motorCycle = new Object();
motorCycle.brand = "HERO";
motorCycle.model = "Apache RTR";
motorCycle["no of motorCycles"] = 200000;
motorCycle["isElectric"] = false;
motorCycle.start = () => {
  console.log("Bike's engine is now ON");
};
console.log(motorCycle);

function Truck() {}
console.log(typeof new Truck());
