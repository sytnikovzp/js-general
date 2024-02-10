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

// let age = 20;
// let welcome = function () {};

// if (age < 18) {
//   function welcome() {
//     console.log('you are too much young');
//   }
//   welcome();
// } else {
//   function welcome() {
//     console.log('you are enough adult');
//   }
//   welcome();
// }

// welcome();

// Arrow function

// const function3 = (par) => {
//   console.log(par);
//   return par * 2;
// };

// Change global var as param

// let brand  = 'Stiga';
// let ttBlade = 'Donic';

// function changeArg(brand = 'TSP', ttBlade = 'Xiom'){
//   // brand = 'Butterfly';
//   // ttBlade = 'DHS';
//   console.log(brand);
//   console.log(ttBlade);
//   return `${brand} + ${ttBlade}`;

//   // return (
//   //   `${brand} + ${ttBlade}`
//   //   );
// }

// // changeArg();
// console.log(changeArg());
// console.log(brand);
// console.log(ttBlade);

// function add(a, b){
//   return a + b;
// }

// console.log(add);

// Calculator

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;
// const mul = (a, b) => a * b;

// const calculate = (num1, num2, mathOperation) => {
//   if (Number.isNaN(num1 - num2)) {
//     return 'Plz, Enter number!';
//   }

//   let operation;

//   switch (mathOperation) {
//     case '+': {
//       operation = sum;
//       brake;
//     }
//     case '-': {
//       operation = sub;
//       brake;
//     }
//     case '/': {
//       operation = div;
//       brake;
//     }
//     case '*': {
//       operation = mul;
//       brake;
//     }
//     default:
//       console.log('Unknown math operation');
//   }

//   if (typeof operation === 'function') {
//     return operation(num1, num2);
//   } else {
//     return 'Unknown math operation';
//   }
// };

// const userInput1 = Number(prompt('Enter first number'));
// const userInput2 = Number(prompt('Enter second number'));
// const mathOperation = prompt('Enter math operaion');

// const result = calculate(userInput1, userInput2, mathOperation);
// console.log(result);

// No pure function
// const noPureFunction = (a, b) => {
//   a = a * Math.random();
//   return a + b;
// };

// console.log(noPureFunction(10, 20));

// let c = 10;

// const add1 = (d) => (c += d);

// console.log(add1(10));
// console.log(c);

// Stack

// debugger

// function greet(person){
//   console.log(`Hello ${person}`)
// }

// greet('John');
// console.log('Bye-bye')

// Maximum


// // debugger
// function chicken(){
//   return egg();
// }

// function egg(){
//   return chicken();
// }

// console.log(chicken());

// Documentation JSDoc

// /**
//  * 
//  * @param {number} ballAmount 
//  * @param {number} wall 
//  * @param {number} diameter 
//  * @returns {number} - amount of volumes
//  */

// function getVolumes(ballAmount, wall, diameter){
//   let result = 0;
//   for(let i = 1; i <= ballAmount; i++){
//     let innerDiam = diameter + 2 * wall * (i-2);
//     let volume = Math.PI * innerDiam ** 3 / 6;
//     result += volume;
//   }
//   return result.toFixed(5);
// }

// const volumes = getVolumes(12,0.01,0.5);
// console.log(volumes);

// getVolumes()

// Counter

function counter(){
  let count = 0;
  return ++count;
}

console.log(counter());