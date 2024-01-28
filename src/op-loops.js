'use strict';

// Leap Year

let year = Number(prompt('Enter year, please'));

console.log(year);

// Strangeness of isNaN()
// console.log(Number.isNaN(NaN));

// if (Number.isNaN(year)){
//   console.log('Entered wrong data');
// } else if (year % 100 === 0){
//     if(year % 400 === 0){
//       console.log('This is a leap year');
//     } else {
//       console.log('This is not a leap year');
//     }
// } else if (year % 4 === 0 && year > 4){
//       console.log('This is a leap year')
// } else {
//   console.log('This is not a leap year');
// }

// With && and ||

if (Number.isNaN(year)){
    console.log('Entered wrong data');
  } else {
    year % 4 === 0 && 
    (year % 100 !== 0 || year % 400 === 0) &&
      year > 4 &&
      console.log('It is a leap year');

      (year % 4 === 0 && 
        (year % 100 !== 0 || year % 400 === 0) &&
        year > 4) || 
        console.log('This is not a leap year');
  }