'use strict';

// let title = 'MS';
// const sportsmen = {
//   [title]: 'MS',
// };

// console.log(sportsmen);

// function setTitle(rate) {
//   let title;
//   let address = 'Ukraine';
//   if (rate >= 60) {
//     title = 'MS';
//   } else if (rate >= 40 && rate < 60) {
//     title = 'KMS';
//   } else {
//     title = 'ordinary sportsmen';
//   }
//   const sportsmen = {
//     [title]: title,
//     address,
//   };
//   return sportsmen;
// }

// console.log(setTitle(45));

// const user = {
//   name: 'John',
//   // say: function(){
//   //   return 'Hello everybody';
//   // }

//   // say(){
//   //   return 'Hello everybody';
//   // }

// }

// user.say = function(){
//   return 'Hello everybody';
// }

// // console.log(user.say());

// Car

// let color = 'green';

// const car = {
//   brand: 'Toyota',
//   model: 'avalon',
//   'year of relise': 1995,
//   transmission: 'mechanics',
//   isWell: true,
//   color,
//   run(driver) {
//     return `Run and drive ${driver} on ${this.brand} ${this.model}`;
//   },
//   go: (driver) => {
//     return `Run and drive ${driver} on ${this.brand} ${this.model}`;
//   },
// };

// console.log(car);

// console.log(car.run('Bill'));

// console.log(`========================`)

// console.log(car.go('Bill'));

// console.log('color' in car);

// console.log(`========================`)

// // For ... in

// for(let key in car){
//   // console.log(key);
//   if(typeof car[key] !== 'function'){
//   console.log(`key ${key} = ${car[key]}`);
//   }
// }

// Copy of object

// const car2 = {
//   brand: 'Toyota',
//   model: 'avalon',
//   'year of relise': 1995,
//   transmission: 'mechanics',
//   isWell: true,
//   color,
//   run(driver) {
//     return `Run and drive ${driver}`;
//   },
//   1: 1,
// };

// console.log(car2);

// const car3 = car;
// console.log(car3);

// console.log(car === car2); // compare address, copy by address
// console.log(car === car3); // copy by link

// console.log('===============================')

// console.log(car)
// console.log(car2)

// Function isEmpty

// function checkEmpty(obj) {
//   for (let prop in obj) {
//     return false;
//   }
//   return true;
// }

// const emptyObj = {};

// console.log(checkEmpty(car));
// console.log(checkEmpty(emptyObj));

// console.log(Object.keys(car));
// console.log(Object.keys(emptyObj).length === 0);

// THIS

// const desktop = {
//   brand: 'Intel',
// };

// const laptop = {
//   brand: 'Dell',
// };

// function showBrand() {
//   return this.brand;
// }

// function func() {
//   return this;
// }

// const arrowFunc = () => this;

// const bindArrow = func.bind(laptop);

// // laptop.show = arrowFunc;
// // desktop.show = func;

// laptop.show = showBrand;
// desktop.show = showBrand;

// // console.log(func());
// // console.log(arrowFunc());

// console.log(laptop.show());
// console.log(desktop.show.call(car));

// const bindShow = laptop.show.bind(car);

// // console.log(typeof bindShow)
// console.log(bindShow());

// CONSTRUCTOR

// function Car(brand, model, transmission = 'auto', color = 'white') {
//   this.brand = brand;
//   this.model = model;
//   this.transmission = transmission;
//   this.color = color;
//   this.run = function () {
//     return `Run and drive on ${this.brand} ${this.model}`;
//   };
// }

// const bmw = new Car('BMW', 'X5', 'auto', 'black');
// const toyota = new Car('Toyota', 'Camry');

// console.log(bmw);
// console.log(toyota);

// // Multiply price

// const price = {
//   tea: 20,
//   coffee: 30,
//   meal: 50,
//   onion: 10,
//   waiter: 'John Doe',
//   isPaid: false,
// };

// for (let key in price) {
//   console.log(`${key} : ${price[key]}`);
// }

// console.log('====================');

// function multPrice(bill){
//   for(let key in bill)
//   if(typeof bill[key] === 'number'){
//     bill[key] *= 2;
//   }
// }

// multPrice(price)

// for (let key in price) {
//   console.log(`${key} : ${price[key]}`);
// }

// Math
// console.log(Math.random() * 100);

// function getRandomRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log(Number(getRandomRange(10, 100)).toFixed(3)); // after coma

// console.log(Number(getRandomRange(10, 100)).toPrecision(3)); // all digital

// Number
// console.log((23094209438).toExponential());

// Date
// const date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(Date.now());

//String

let sams = ' Samsung';
let gap = ' ';
let nokia = 'Nokia ';

let together = sams.concat(gap, nokia);
let end = nokia.padEnd(20, '/\\');

console.log(sams.length);
console.log(sams.charAt(5)); // u
console.log(sams.charCodeAt(5)); // unicode
console.log('----------------------');
console.log(together);
console.log(together.includes('a', 5));
console.log(together.indexOf('a')); // first entires
console.log(together.lastIndexOf('a')); // last entires
console.log(nokia.repeat(3));
console.log(nokia.padEnd(20, '/\\'));
// console.log(nokia);
// console.log(end);
console.log('----------------------');
console.log(together.slice(2, 5));
console.log(together.slice(2, -2));
console.log(together.split('', 10));
console.log(together.split(' ', 10));
console.log(together.toLocaleUpperCase());
console.log(together.trim());
console.log(together.trim().split(' ', 10));

