// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("Say hii to ",args[i]);
// }
// const someValue = require("./math.js")
// console.log(someValue)

// let fruits = require('./Fruits');
// console.log(fruits);
// var figlet = require("figlet");

// figlet("Chirag Kuriya", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import {sum,PI} from "./math.js";
console.log(sum(2,2));
console.log(PI);