'use strict';

const arr1 = [10, 20];
console.log(arr1);

const arr2 = new Array('str', true);
const arr3 = new Array(10);
console.log(arr3);
console.log(arr2);

const arrString = new Array('Stiga', 'DHS');
const numObj = {
  0: 0,
  1: 1,
  2: 2,
};

console.log(arrString);
console.log(numObj);

// Create
arr1[5] = 50;
// Read
console.log(arr1[1]);
// Update
arr1[2] = 70;
console.log(arr1[2]);

const fruits = [
  'Apple',
  'Orange',
  'Pear',
  'Peach',
  'Pineapple',
  'Plum',
  'Pineapple',
  'melon',
];

fruits[2] = 'mango';
console.log(fruits);

// Delete
delete fruits[3]; // empty
console.log(fruits);

console.log(fruits[4]);
console.log(fruits.at(-3));

const arrOf = Array.of(10, 12, 15, 21, 54);
console.log(arrOf);

// Concat

console.log(fruits.concat(arr1, () => {}, NaN));

console.log(arrOf.fill(2, 1, 5));
console.log(arrOf.fill());

// Flat

const arrMulty = [1, [2, 3], [4, 5, [6, 7]]];
console.log(arrMulty);
console.log(arrMulty.flat(2));

// Join

console.log(fruits.join());
console.log(fruits.join(' '));
console.log(arr1.join(' '));

console.log(fruits.includes('apple')); // check element in arr
console.log(fruits.indexOf('apple'));

// console.log(fruits.reverse());

const subFruits = fruits.slice(1, 5);
console.log(subFruits);

// Sort
console.log(fruits.sort());

const numbArr1 = [12, 23, 38, 95, 100, 215, 41, 1000];
console.log(numbArr1.sort());
console.log(numbArr1.sort((a, b) => a - b));

console.log(fruits.splice(2, 2, 'blueberry'));
console.log(fruits);

// with

console.log(numbArr1.with(2, 500)); // replace by index element in arr
console.log(numbArr1);

//Practice

const str1 = 'Montenegro';
const str2 = 'Kiev is a capital of Ukraine';
const sep1 = '';
const sep2 = ' ';
const reverseString = (str, sep) => str.split(sep).reverse().join(sep);

console.log(reverseString(str1, sep1));
console.log(reverseString(str2, sep2));

const str3 = 'Аргентина манит негра';

const reverseLine = (str3) => {
  const sep = '';
  const strWithoutGaps = str3.toLowerCase().replaceAll(' ', sep);
  console.log(str3.strWithoutGaps);
  return strWithoutGaps.split(sep).reverse().join(sep);
};

reverseLine(str3);

// For

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

for (let fruit of fruits) {
  console.log(fruit);
}
