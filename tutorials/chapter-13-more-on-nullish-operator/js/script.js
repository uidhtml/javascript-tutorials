//More on nullish operator
let x = 10;
//console.log(x);

let y = 30;
y ??= 20;
//console.log(y);

function person(obj) {
  obj.name ??= "Gautam";
  obj.age ??= 30;

  return obj;
}

console.log(person({ name: "Mohan" }));
