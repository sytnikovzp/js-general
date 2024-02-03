'use strict';

//function declaration
function summ(a, b) {
  // parameters
  // console.log(a + b);
  return a + b;
}

console.log(summ(10, 20)); // argumets

// function expression
const showDivide = function (c, d) {
  return c / d;
};
console.log(showDivide(20, 10)); // without "" is body func

// const newFunc = summ;
// console.log(newFunc(2, 3));
