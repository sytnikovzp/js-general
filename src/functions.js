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
