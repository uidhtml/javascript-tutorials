// UIDHTML youtube channel 🙏

// Chapter - 44
// at(), toReversed(), toSorted(), toSpliced() and with() methods

//at()
//Already covered in chapter numer 29

//toReversed()
const cities = ["Ahamadabad", "Delhi", "Mumbai", "Chennai", "Kolkata"];

//toReversed()
const reversedArray = cities.toReversed();
console.log(reversedArray);
console.log("Original Array: ", cities);

//toSorted()
const sortedCities = cities.toSorted();
console.log(sortedCities);
console.log("Original Array after sort: ", cities);

//toSpliced()
const toSplicedArray = cities.toSpliced(1, 0, "Bhagalpur");
console.log("toSpliced Array: ", toSplicedArray);
console.log("Original array: ", cities);

//with()
const withMethodOnArray = cities.with(1, "Noida");
console.log(withMethodOnArray);
console.log(cities);
