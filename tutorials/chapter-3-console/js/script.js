//console.clear();
//console.clear();

//console.groupCollapsed();

//console.group();
//console.log()
console.log("Welcome to uidhtml");

//console.error()
console.error("Welcome to uidhtml");

//console.assert()
let x = 10;
let y = 12;
console.assert(x == y, "Error in comparision");

//console.count()
let p = 1;
while (p < 10) {
  //console.count("Hello uidhtml");
  p++;
}

//console.time()
console.time();
for (let i = 0; i < 2000; i++) {
  //console.log(i);
}
//console.timeEnd()
console.timeEnd();

//console.trace()
function myFunction() {
  func1();
}

function func1() {
  func2();
}
function func2() {
  console.trace();
}

myFunction();

//console.warn()
console.warn("Please update depricated function");

//console.info()
console.info("Please update depricated function");

//console.table()
let obj = {
  x: 10,
  name: "uidhtml",
  hasWebsite: true,
  webAddress: "uidhtml.com",
};
console.table(obj);

//console.groupEnd();

// function
function calculateArea(length, width) {
  // Log the input parameters for debugging purposes.
  console.debug("Calculating area with length:", length, "and width:", width);

  if (length <= 0 || width <= 0) {
    console.error("Invalid dimensions: Length and width must be positive.");
    return null;
  }

  const area = length * width;
  // Log the calculated area using console.debug().
  console.debug("Calculated area:", area);
  return area;
}

// Example usage:
calculateArea(10, 5); // This will show debug messages if 'Verbose' filter is on.
calculateArea(-2, 7); // This will show an error message and debug messages.
