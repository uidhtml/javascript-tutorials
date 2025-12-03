// UIDHTML youtube channel 🙏

// Chapter - 43
// flat() and flatMap() methods

//flat()
const userGroups = [
  { group: "Admins", permissions: ["create", "delete", "update"] },
  { group: "Editors", permissions: ["create", "update"] },
  { group: "Viewers", permissions: ["read"] },
];

const permissions = userGroups.map((user) => {
  return user.permissions;
});
console.log(permissions.flat());
console.log([...new Set(permissions.flat())]);

//flatMap()
const permissionsUsingFlatMap = userGroups.flatMap((user) => {
  return user.permissions;
});
console.log(permissionsUsingFlatMap);

//counting word in a sentence
const sentences = ["Hello world", "Javascript is fun", "FlatMap is cool"];

const arrayOfWords = sentences.map((sentence) => {
  return sentence.split(" ");
});

console.log(arrayOfWords);
// [
//     [
//         "Hello",
//         "world"
//     ],
//     [
//         "Javascript",
//         "is",
//         "fun"
//     ],
//     [
//         "FlatMap",
//         "is",
//         "cool"
//     ]
// ]

console.log(arrayOfWords.flat());
["Hello", "world", "Javascript", "is", "fun", "FlatMap", "is", "cool"];
console.log(arrayOfWords.flat().length);

//Remove empty slot/array
const dataWithEmptySlot = [[1, 2, 3], [], ["Ram", "Mukesh"], [], [{ x: 20 }]];
console.log(dataWithEmptySlot.flat());
// [
//     1,
//     2,
//     3,
//     "Ram",
//     "Mukesh",
//     {
//         "x": 20
//     }
// ]

//Cart items
const cart = [
  { name: "Phone", price: 1000, inStock: true },
  { name: "Case", price: 20, inStock: false }, // Out of stock
  { name: "Charger", price: 50, inStock: true },
];

const flteredData = cart.filter((item) => {
  return item.inStock;
});

console.log(flteredData);

//with flatMap()
const withFlatMap = cart.flatMap((item) => {
  if (!item.inStock) {
    return [];
  }
  return [item.price * 10];
});

console.log(withFlatMap);

//multi level data

const multiLevelData = [
  [1, 2, 3, [5, 6, 7, [8, 9, 10]]],
  ["Ram", "Ramesh", ["Rakesh", "Rohan", ["Somesh", "Naresh"]]],
];

console.log(multiLevelData.flat(Infinity));

//performance
// 1. Setup a large dataset (1 million items)
const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i);

console.log("--- Starting Benchmark ---");

// --- Method A: Filter then Map ---
console.time("Filter().Map()");
const methodA = largeArray.filter((num) => num % 2 === 0).map((num) => num * 2);
console.timeEnd("Filter().Map()");

// --- Method B: flatMap ---
console.time("flatMap()");
const methodB = largeArray.flatMap((num) => {
  // If even, return [num * 2], otherwise return [] to remove it
  return num % 2 === 0 ? [num * 2] : [];
});
console.timeEnd("flatMap()");

console.log("--- End Benchmark ---");

//Reduce()
/**
 * Flattens an array recursively using the reduce method (mimics flat(Infinity)).
 * @param {Array} arr - The array to flatten.
 * @returns {Array} The flattened array.
 */
function reduceFlat(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return [...accumulator, ...reduceFlat(currentValue)];
    }
    return [...accumulator, currentValue];
  }, []);
}

// --- Example Usage ---
const deepData = [{ id: 1 }, [2, [3, [4, { nested: true }]]], 5];

const result = reduceFlat(deepData);
console.log(result);
/* Output:
[
  { id: 1 },
  2,
  3,
  4,
  { nested: true },
  5
]
*/
