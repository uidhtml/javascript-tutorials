// UIDHTML youtube channel 🙏

// Chapter - 30

//Indian State Array
const originalStatesArray = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

//Populate state in the state-list
const stateList = document.querySelectorAll(".state-list");

//Pulate state in the state-list
function populateState(stateList, array) {
  for (const state of array) {
    const li = document.createElement("li");
    li.innerText = state;
    stateList.appendChild(li);
  }
}

//Map method
const stateArrayWithCountry = originalStatesArray.map(
  (state) => `India - ${state}`
);
populateState(stateList[0], stateArrayWithCountry);

//Filter method
populateState(stateList[1], originalStatesArray);

//Select input
const stateInput = document.querySelector("#state-input");
const noResults = document.querySelector(".no-results");
//Add event to input
stateInput.addEventListener("input", filterState);

function filterState() {
  const filteredArray = originalStatesArray.filter((state) =>
    state.toLocaleLowerCase().startsWith(this.value.toLocaleLowerCase())
  );
  stateList[1].innerHTML = "";

  if (filteredArray.length == 0) {
    noResults.classList.add("show");
  } else {
    noResults.classList.remove("show");
    populateState(stateList[1], filteredArray);
  }
}

//Method chaining
