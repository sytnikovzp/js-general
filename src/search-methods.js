'use strict';

// methods array (perebor)

// --- Method forEach ---

// let a;
const arr1 = [1, 2, 3];

arr1.forEach((el, i, arr1) => {
  // console.log(el * 5);
  // arr1[i] = el * 5;
});

// console.log(arr1);

// Own implementation of forEach

function myForEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr);
  }
}

myForEach(arr1, (el) => console.log(el));

// --- Method find ---

const arr2 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];

// console.log(arr2.find((el) => el === 'DHS'));
// console.log(arr2.findIndex((el) => el === 'DHS'));
// console.log(arr2.findIndex((el) => el === 'DHSs'));

const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3.find((el) => el % 2 === 0));
// console.log(arr3.findLastIndex((el) => el % 2 === 0));

// --- Method map ---

const strIntArr = ['1', '5', '10'];

const parseToInt = (Item) => parseInt(Item) * 10;

const intArr = strIntArr.map(parseToInt);

// console.log(intArr);

// Own implementation of map

function myMap(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.apply(thisArg, [arr[i], i, arr]));
  }
  return result;
}

console.log(myMap(strIntArr, parseToInt));
