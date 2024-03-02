'use strict';

// const str = 'Donic';
// console.log(Array.from(str));

// const timo = {
//   fName: 'Timo',
//   lName: 'Boll',
//   age: 38,
//   brand: 'Donic',
// };

// const map = new Map(Object.entries(timo));
// console.log(map);

// const mapEntries = map.entries();
// console.log(mapEntries);

// const mapArr = Array.from(mapEntries);
// console.log(mapArr);

// console.log(map.get('lName'));
// console.log(map.has('fName'));
// console.log(map.delete('sys'));
// // console.log(map.delete('brand'))
// // console.log(map)
// console.log(map.set('country', 'Germany'));
// console.log(map.set(timo, 'Rate = 12000'));

// for (const item of map) {
//   console.log(item);
// }

// groupBy method

class Player {
  constructor(fistName, lastName, foreHand, backHand, age, rate, city) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.foreHand = foreHand;
    this.backHand = backHand;
    this.age = age;
    this.rate = rate;
    this.city = city;
  }
}
const maLong = new Player(
  'Ma',
  'Long',
  'Butterfly Tenergy 19',
  'Donic Acuda S1',
  35,
  80,
  'Dnipro'
);
const xuXin = new Player(
  'Xu',
  'Xin',
  'Butterfly Tenergy 05',
  'Stiga Calibra',
  30,
  75,
  'Kiev'
);
const kokiNiva = new Player(
  'Koki',
  'Niva',
  'DHS Huricane',
  'TSP',
  25,
  35,
  'Odessa'
);
const timoBoll = new Player(
  'Timo',
  'Boll',
  'Donic Bar',
  'Donic Acuda',
  25,
  25,
  'Zaporizhzhia'
);
// const players = [maLong, xuXin, kokiNiva, timoBoll];

// weakmap

let kouLei = {
  fullName: 'Kou Lei',
  age: 30,
  rate: 85,
};

const players = [
  [maLong, 'butterfly'],
  [xuXin, 'DHS'],
  [kokiNiva, 'Victas'],
  [timoBoll, 'Donic'],
  [kouLei, 'Stiga'],
];

const mapWeak = new WeakMap(players);
console.log(mapWeak);

kouLei = null;
console.log(mapWeak.get(kokiNiva));
console.log(mapWeak.get(kouLei));

