// UIDHTML youtube channel 🙏

// Chapter - 40 - includes()

//includes()
const colors = ["red", "green", "blue", "yellow", "pink"];
console.log(colors.indexOf("Blue".toLocaleLowerCase()));
console.log(colors.includes("Blue".toLocaleLowerCase()));

let str = "India is my country";
console.log(str.includes("My"));

let obj = {
  position: ["developr", "ceo"],
};

if (obj.position.includes("admin")) {
  alert("He is an admin");
} else {
  alert("He is a normal user");
}
