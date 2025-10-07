// UIDHTML youtube channel

//Array
let personArray = ["Gautam", "Mukesh", "Rohan", "Deepak", "Naresh"];

console.log(personArray.length);

// Iteration array with traditional for() loop

for (let i = 0; i < personArray.length; i++) {
  console.log("For Loop result: ", personArray[i]);
  if (i == 2) {
    break;
  }
}

// Iteration array with forEach() loop
//callbackFunction()
let personsDOM = document.getElementById("persons");
personArray.forEach((person, index, array) => {
  console.log(person);
  if (index == 2) {
    console.log("Count is 2");
    array.push("Rakesh");
    console.log(array);
  }

  let li = document.createElement("li");
  li.innerHTML = person;
  personsDOM.appendChild(li);
});

console.log(personArray);
