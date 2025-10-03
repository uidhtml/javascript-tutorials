//Document properties and methods
//console.log(document);

//selecting ID
let myDivDOM = document.getElementById("my-div");
//console.log(myDivDOM);
// myDivDOM.innerHTML = `
//   <h2>cities</h2>
//   <ul>
//   <li>Patna</li>
//   <li>New delhi</li>
//   <li>Mumbai</li>
//   </ul>
// `;
myDivDOM.style.color = "#ffcb00";
myDivDOM.style.cursor = "pointer";
myDivDOM.addEventListener("click", function () {
  alert("You have click on ID DOM");
});

//Selecting class by getElementsByClassName

let citiesHtmlCollection = document.getElementsByClassName("city");
//console.log(citiesHtmlCollection);

let colorArray = ["#ffcb00", "#333", "#cc0000", "#555", "#999"];

[...citiesHtmlCollection].forEach((element, index) => {
  element.style.color = colorArray[index];
});

//Nested section
let cityList = document.getElementsByClassName("city-list")[0];
let nestedCityCollection = cityList.getElementsByClassName("city");
//console.log(nestedCityCollection);
[...nestedCityCollection].forEach((element, index) => {
  element.addEventListener("click", function () {
    alert(index);
  });
});

//Select elements by TagName
const ulListCollection = document.getElementsByTagName("ul");
console.log(ulListCollection);
[...ulListCollection].forEach((element) => {
  //console.log(element);
  const liCollection = element.children;
  //console.log(liCollection);
});

//Select elements by Name
const form = document.getElementsByName("form");
form.getElementsByName("firstName");
const inputCollection = document.getElementsByName("firstName");
console.log(inputCollection[0].value);
