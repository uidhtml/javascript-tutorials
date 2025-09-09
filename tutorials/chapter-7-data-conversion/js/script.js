//Convert to string
// console.log("" + 24);
// console.log("10" + false);
// console.log("10" + null);
// console.log("a" + [10,20]);
// console.log("a" + [10]);
// console.log("a" + {a: 10});

//Convert to number
// console.log("100" - 20);
// console.log("100" * 20);
// console.log("100" / 20);
// console.log("100" - false);
// console.log("100" - true);
// console.log("uidhtml" - true);
// console.log([20] - true);
// console.log([20,30] - true);

//Convert to boolean
// console.log(!!0);
// console.log(!!1);
// console.log(!!"");
// console.log(!!"uidhtml");
// console.log(!![10,20]);
// console.log(!!{a:20});

//Convert null to number
// console.log(100 + null);
// console.log(100 * null);

//Convert undefined to number
// console.log(100 + undefined);

//Explicit
//String conversion
// console.log(String(100))
// console.log(String(null))
// console.log(String(false))
// console.log((124).toString())
// console.log(([10,20,[34,'uidhtml']]).toString())
// console.log(({a:20}).toString())

//Number conversion
// console.log(Number('100'));
// console.log(Number('uidhtml'));
// console.log(Number(false));
// let a = true;
// console.log(Number(a));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(+'50');
// console.log(Number([10]));
// console.log(Number([10,20]));
// console.log(+[10,20]);
// console.log(parseInt('300'));
// console.log(parseFloat('300').toFixed(2));

//Convert to boolean
// console.log(Boolean('100'));
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean([10,20]));
// console.log(Boolean({a:30}));
// console.log(Boolean({}));

//EPOC time
console.log(Date())
console.log(new Date().getTime())


