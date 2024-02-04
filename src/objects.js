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

function Car(brand, model, transmission = 'auto', color = 'white') {
  this.brand = brand;
  this.model = model;
  this.transmission = transmission;
  this.color = color;
  this.run = function () {
    return `Run and drive on ${this.brand} ${this.model}`;
  };
}

const bmw = new Car('BMW', 'X5', 'auto', 'black');
const toyota = new Car('Toyota', 'Camry');


console.log(bmw);
console.log(toyota)
