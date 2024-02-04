'use strict';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  login: 'j_d',
  email: 'j_d@gmail.com',
  isMarried: true,
  1: 1,
  2: 2,
  'home address': 'Dnipro',
};

console.log(user);

const person = new Object(user);

// const arr = new Object(Array());
// console.log(arr);

console.log(person);

console.log(person === user);

// CRUD
// Create Read Update Delete

console.log(user.firstName);

user.phone = '+38 097 699 33 54';

user.age = 21;

console.log(user['home address']);

delete user[2];