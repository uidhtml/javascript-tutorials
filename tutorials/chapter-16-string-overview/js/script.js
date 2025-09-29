// String overview
let str = "Uidthml.com";
console.log(typeof str);

//Double quote ("...") string
let doubleQuoteTr = "Gautam Kumar";
console.log(typeof doubleQuoteTr);

//Single quote ("...") string
let singleQuoteStr = "Gautam Kumar";
console.log(typeof singleQuoteStr);

//Multiline string
let multilineStr = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
    . It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
console.log(typeof multilineStr);

//Escape charecter quote
let escapeCharStr =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book's. It has survived not only \"five centuries\", but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
console.log(typeof escapeCharStr);

//Template iterals (ES6)
let firstName = "Gautam";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;
let fullNameWithTemplateLiterals = `${firstName} ${lastName}`;
console.log(fullName);
console.log(fullNameWithTemplateLiterals);

//Core Characteristics

//Immutability
let str1 = "Gautam";
let str2 = str1 + " Kumar";
console.log(str1, str2);

let obj = {
  x: 10,
};
let obj2 = obj;
obj.x = 20;
console.log(obj, obj2);

//Indexed Sequence
let authorName = "Gautam Kumar";
console.log(authorName[2]);

//Properties
console.log(authorName.length);

//Padding method
let longStr =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
let shortStr = longStr.padEnd(longStr.length + 3, ".");
console.log(shortStr);
