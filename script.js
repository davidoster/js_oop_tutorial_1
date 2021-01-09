// let myObject = {};
// function myObject2() {return(new Object())};

// console.log(myObject instanceof String);
// console.log(myObject2());

// let x = new Number(10);
// console.log("x is a Number? " + (x instanceof Number));

// var y = 10;
// console.log(y instanceof Object);

// const z = new String("AAAA");
// console.log(z instanceof Object);

// let k = new Boolean(true);
// console.log(k instanceof Object);

// let n = true;
// console.log(n instanceof Boolean);

let j = new Object({name:"AAA"});
// console.log(j);

// let m = new Object({name:"AAA"});
// console.log(m);

// let j1 = j; (false / true)
let j1 = new Object({name:new String("AAA")});

// let m1 = m;
console.log("j.name === j1.name ? " + (j.name === j1.name)); // false

console.log("j.name == j1.name ? " + (j.name == j1.name)); // true

let d = "AAA";
let e = "AAA";
console.log(d==e);
console.log(d===e);

// console.log({});
// console.log(new Object());
// console.log(
//     function()
//     {
//         return(new Object()); // return({}); 
//     }() 
// );

// class MyObject {

// }