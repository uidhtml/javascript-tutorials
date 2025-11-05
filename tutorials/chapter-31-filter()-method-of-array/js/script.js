// UIDHTML youtube channel 🙏

// Chapter - 31 - filter() method

const numArray = [11, 34, 23, 55];

const filteredArray = numArray.filter((element, index, array) => element > 30);
// console.log(numArray);
// console.log(filteredArray);

const employees = [
  { id: 1, firstName: "Rakesh", lastName: "Sharma" },
  { id: 2, firstName: "Mahesh", lastName: "Ghosh" },
  { id: 3, firstName: "Rakesh", lastName: "Kumar" },
  { id: 4, firstName: "Mohan", lastName: "Gupta" },
  { id: 5, firstName: "Raghav", lastName: "Ghosh" },
];

const filteredEmployees = employees.filter(
  (employee) => employee.firstName == "Rakesh"
);
console.log(filteredEmployees);
//
const employees2 = [
  { fullName: "Rakesh Sharma" },
  { fullName: "Mahesh Ghosh" },
  { fullName: "Rakesh Kumar" },
  { fullName: "Mohan Gupta" },
  { fullName: "Raghav Ghosh" },
];

//Method chaining
const filteredEmployeeAfterMethodChaining = employees
  .map((employee) => {
    return { fullName: `${employee.firstName} ${employee.lastName}` };
  })
  .filter((employee) => employee.fullName.includes("Rakesh"));
console.log(filteredEmployeeAfterMethodChaining);
