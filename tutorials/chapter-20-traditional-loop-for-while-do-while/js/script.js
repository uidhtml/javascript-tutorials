// UIDHTML youtube channel
//Traditional loop

//for() loop
let x = 0;
let maxNumber = 5;
let forLoopAddResult = 0;

for (let i = x; i <= maxNumber; i++) {
  // Code to be executed in each iteration
  console.log(`forLoopAddResult: ${forLoopAddResult}, i: ${i}`);
  forLoopAddResult += i;
}
console.log("forLoopAddResult: ", forLoopAddResult);
//while() loop
let z = 0;
let whileLoopResult = 0;
while (z <= maxNumber) {
  console.log(z);
  whileLoopResult += z;
  z++;
}
console.log("whileLoopResult: ", whileLoopResult);

//do-while() loop
let p = 6;
let doWhileLoopResult = 0;
do {
  //Code
  console.log(p);
  doWhileLoopResult += p;
  p++;
} while (p <= maxNumber);
console.log("doWhileLoopResult:", doWhileLoopResult);

// Break with for()
for (let b = 0; b <= 10; b++) {
  if (b == 3) {
    break;
  }
  console.log("b: ", b);
}

// break with while()
let y = 0;
while (y <= 10) {
  if (y == 3) {
    break;
  }
  console.log("y:", y);
  y++;
}

//Break with do-while()
let c = 0;
do {
  if (c == 3) {
    break;
  }
  console.log("c:", c);
  c++;
} while (c <= 10);

//Continue statement with for()
for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log("i:", i);
}

//Continue statement with while()
let n = 0;
while (n <= 10) {
  n++;
  if (n == 3) {
    continue;
  }
  console.log("n:", n);
}

//Continue statement with while()
let j = 0;
do {
  j++;
  if (j == 3) {
    continue;
  }
  console.log("j:", j);
} while (j <= 10);

//Nestes loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
