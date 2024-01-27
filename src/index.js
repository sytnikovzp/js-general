"use strict";

// let srtNum = '11';

// console.log(parseInt(srtNum, 2));
// console.log(Number(srtNum));

// console.log(String(true));
// console.log(Boolean(null));

// console.log(NaN === NaN);

// console.log(+srtNum);

// console.log('258' - 10);
// console.log('258' > 10);

// console.log('123' == 123);
// console.log('123' === 123);

// console.log(true + false);

// console.log(!!0);

// alert('Hi');
// confirm('Are you ready?');
// prompt('Enter Number');
// console.log(Number(prompt('Enter Number')));

// Conditions

let cret = 1200;

let rating = 1200;

// if (rating > cret) {
//   console.log("Its so hight rating!");
// } else if (rating < cret) {
//   console.log("Its so low rating! :(");
// } else console.log("Its equal!");

// Switch
let variant = NaN;
let result = typeof variant;

switch (result) {
  case 'string': 
      console.log(`${variant} is a string`);
      break;
  case 'number': 
      console.log(`${variant} is a number`);
      break;
  case 'boolean': 
      console.log(`${variant} is a boolean`);
      break;
  case 'object': 
      console.log(`${variant} is a object`);
      break;
  default: console.log(`${variant} is an unknown`);
}