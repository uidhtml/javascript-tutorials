// UIDHTML youtube channel 🙏

// Chapter - 30 - map() method

const numArray = [11, 34, 23, 55];
const transformedNumArray = numArray.map((value, index, array) => value * 2);

// console.log(transformedNumArray);
// console.log(numArray);

const employees = [
  { id: 1, firstName: "Rakesh", lastName: "Sharma" },
  { id: 2, firstName: "Mahesh", lastName: "Chandra" },
  { id: 3, firstName: "Ranjan", lastName: "Kumar" },
  { id: 4, firstName: "Mohan", lastName: "Gupta" },
  { id: 5, firstName: "Raghav", lastName: "Ghosh" },
];

Array.prototype.empFullName = (callback, thisArg) => {
  if (typeof callback != "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this));
  }
  return result;
};

const transformedEmployeeArray = employees.map((employee, index) => {
  return {
    fullName: `${employee.firstName} ${employee.lastName}`,
  };
});
console.log(transformedEmployeeArray);
