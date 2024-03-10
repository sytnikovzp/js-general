'use strict';

// Return array with max elements from every subarray. Sort to max
const matrix = [
  [1, 2, 3, 4],
  [5, 18, 0, 12],
  [3, 5, 12, 5],
  [28, 9, 2, 34],
];

const arraySort = (a, b) => a - b;

const result = matrix.map((array) => array.sort(arraySort)[array.length - 1]);

console.log(result.sort(arraySort));

// ----------------

// Create function return definite props from array of objects (person for example)

// class Person {
//   constructor(name = 'John', age = 30, salary = 1000) {
//     (this.name = name), (this.age = age), (this.salary = `${salary}$`);
//   }
// }

// const john = new Person();
// const jane = new Person('Jane', 25, 2000);
// const bill = new Person('Bill', 40, 3000);
// const prop = 'salary';

// const arrayPersons = [john, jane, bill];

// const getProps = (arr, prop) => {
//   arr.forEach(person => console.log(`${person.name} ${person[prop]}`));
// }

// getProps(arrayPersons, prop)

const str1 = ' Donic Stiga DHS ';

function removeGap(str) {
  const regexp = /\s/g;
  return str.replace(regexp, '')
}

console.log(removeGap(str1))