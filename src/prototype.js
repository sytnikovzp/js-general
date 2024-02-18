'use strict';

// function Country(title = 'Ukraine', capital = 'Kiev') {
//   this.title = title;
//   this.capital = capital;
//   // this.getInfo = function () {
//   //   return `Capital is ${this.capital}`;
//   // };
// }

// Country.prototype.getInfo = function () {
//   return `Capital is ${this.capital}`;
// };

// const ukraine = new Country();
// const usa = new Country('USA', 'Washington');

// console.log(ukraine.getInfo());
// console.log(usa.getInfo());

// console.log(ukraine.getInfo === usa.getInfo);

// console.log(ukraine);

// console.log(usa instanceof Country);
// console.log(usa instanceof Array);

// Arguments - spread - rest

function someFunc(a) {
  return arguments[1];
}

const funcExp = function (a) {
  // const arr = Array.from(arguments);
  // arr.forEach((el) => console.log(el));
  return arguments;
};

// const arrowFunc = (a) => arguments; // no this, no arguments, no prototype

const arrowFunc = (a, ...args) => args; 


// console.dir(someFunc)
// console.dir(funcExp)
// console.dir(arrowFunc)

// console.log(someFunc(1, 2, true, {}));
// console.log(arrowFunc(1));

// console.log(arrowFunc(1, 2, true, {}));


