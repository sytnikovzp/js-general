'use strict';

// //function declaration
// function summ(a, b) {
//   // parameters
//   // console.log(a + b);
//   return a + b;
// }

// console.log(summ(10, 20)); // argumets

// // function expression
// const showDivide = function (c, d) {
//   return c / d;
// };
// console.log(showDivide(20, 10)); // without "" is body func

// // const newFunc = summ;
// // console.log(newFunc(2, 3));

// Check Age

let age = 20;
let welcome = function () {};

if (age < 18) {
  function welcome() {
    console.log('you are too much young');
  }
  welcome();
} else {
  function welcome() {
    console.log('you are enough adult');
  }
  welcome();
}

// welcome();

// Arrow function

const function3 = (par) => {
  console.log(par);
  return par * 2;
};
