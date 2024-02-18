'use strict';

// __proto__

const animal = {
  type: 'common',
  limbAmount: 4,
  move() {
    console.log('I can move some way');
  },
  eat() {
    console.log('I can eat anything');
  },
};

const mammal = {
  type: 'mammal',
  eat() {
    console.log('I ate milk in My childhood');
  },
};

const cat = {
  name: 'Cat',
  maxWeight: 30,
  maxAge: 20,
  move() {
    console.log('I can run');
  },
};

mammal.__proto__ = animal;
cat.__proto__ = mammal;

console.log(mammal.limbAmount);
console.log(cat.limbAmount);
cat.eat();

const sonya = Object.create(cat, {
  name: {
    value: 'sonya',
    enumerable: true,
  },
});

console.log(sonya);

const myArray = [10];
const a = 110;

console.log(myArray.valueOf());
console.log(a.valueOf());
