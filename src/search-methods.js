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

// --- Methods some and every ---

const arr4 = [2, 5, 9, 12, 18];

console.log(arr4.some((el) => el % 2 !== 0)); // false if arr is empty
console.log(arr4.every((el) => el % 2 !== 0)); // true if arr is empty

// Own implementation for some method

const mySome = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, [arr[i], i, arr])) {
      return true;
    }
  }
  return false;
};

console.log(mySome(arr4, (el) => el % 2 === 0));

// Own implementation for every method

const myEvery = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback.call(thisArg, [arr[i], arr])) {
      return false;
    }
  }
  return true;
};

console.log(myEvery(arr4, (el) => el % 2 !== 0));

// --- Method filter ---

const arr5 = [1, 2, 3, 4, 5, 8, 265, 345];
console.log(arr5.filter((el) => el > 8));

const arr6 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];
console.log(arr6.filter((el) => el[0] === 'D'));

const doe = {
  fullName: 'John Doe',
  role: 'moderator',
};

const smith = {
  fullName: 'Jane Smith',
  role: 'administrator',
};

const persons = [doe, smith];
console.log(persons.filter((el) => el.role === 'administrator'));

// Imp Filter

// function myFilter(arr, callback, thisArg){
//   const res = [];
//   for(let i = 0; i < arr.length; i++){
//     if(callback.call(thisArg, arr[i], i, arr))
//   }
// }

// --- Reduce and reduce right ---

// Pseudocode

/*

array.reduce(callback, [initial value]);
callback(accum, currentValue, [index, array]);

if(initialValue){
  accum = initialValue;
  currentValue = array[0];
} else{
  accum = array[0];
  currentValue = array[1];
}

*/

const emptyArr = [];

console.log(emptyArr.reduce((a, b) => a + b, 10)); // 10 initial value

const friends = [
  { name: 'Ann', books: ['HP', 'Python'], age: 20 },
  { name: 'John', books: ['JS', 'Hibernate'], age: 25 },
  { name: 'Bill', books: ['Java', 'SQL'], age: 30 },
];

const allBooks = friends.reduce(
  (prev, current) => [...prev, ...current.books],
  []
);

console.log(allBooks);

// Own reduce

const myReduce = (arr, callback, startValue) => {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      result = callback(result, arr[i + 1], i, arr);
    }
  }
  return result;
};

const arrArr = [[1, 2], [3, 4], [(5, 6)]];

console.log(myReduce(arrArr, (a, b) => a.concat(b)));
