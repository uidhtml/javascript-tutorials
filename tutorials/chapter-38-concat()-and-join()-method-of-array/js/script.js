// UIDHTML youtube channel 🙏

// Chapter - 38 - concat() and join()

//concat()
let users = ["Gautam", "Rakesh", "Mohan"];
let address = ["Delhi", "Patna", "Mumbai", { address: "Bhagalpur" }];

let concatinatedArr = address.concat("Rohan", users);
console.log(concatinatedArr);
console.log(address);

concatinatedArr[3].address = "Patna";

//spread oprator
let arr = [...address, ...users, "Rohan"];
console.log(arr);

let obj = {
  x: 20,
  y: "Gautam",
};

console.log(...[obj]);

//join() method
let joinedData = users.join(", ");
console.log(joinedData);

const array2 = ["Delhi", "Patna", "Mumbai", { address: "Bhagalpur" }];
let joinedData2 = array2.join();
console.log(joinedData2);

//if data has null or undefined
let array3 = [1, 3, "gautam", null, true, undefined];
console.log(array3.join("-"));

let array4 = ["https://uidhtml.com", "blog", "post", 1];

console.log(array4.join("/"));
console.log(`${array4[0]}/${array4[1]}/${array4[2]}/${array4[3]}`);
