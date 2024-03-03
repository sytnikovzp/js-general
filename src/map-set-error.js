// 'use strict';

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

// class Player {
//   constructor(fistName, lastName, foreHand, backHand, age, rate, city) {
//     this.fistName = fistName;
//     this.lastName = lastName;
//     this.foreHand = foreHand;
//     this.backHand = backHand;
//     this.age = age;
//     this.rate = rate;
//     this.city = city;
//   }
// }
// const maLong = new Player(
//   'Ma',
//   'Long',
//   'Butterfly Tenergy 19',
//   'Donic Acuda S1',
//   35,
//   80,
//   'Dnipro'
// );
// const xuXin = new Player(
//   'Xu',
//   'Xin',
//   'Butterfly Tenergy 05',
//   'Stiga Calibra',
//   30,
//   75,
//   'Kiev'
// );
// const kokiNiva = new Player(
//   'Koki',
//   'Niva',
//   'DHS Huricane',
//   'TSP',
//   25,
//   35,
//   'Odessa'
// );
// const timoBoll = new Player(
//   'Timo',
//   'Boll',
//   'Donic Bar',
//   'Donic Acuda',
//   25,
//   25,
//   'Zaporizhzhia'
// );
// // const players = [maLong, xuXin, kokiNiva, timoBoll];

// // weakmap

// let kouLei = {
//   fullName: 'Kou Lei',
//   age: 30,
//   rate: 85,
// };

// const players = [
//   [maLong, 'butterfly'],
//   [xuXin, 'DHS'],
//   [kokiNiva, 'Victas'],
//   [timoBoll, 'Donic'],
//   [kouLei, 'Stiga'],
// ];

// const mapWeak = new WeakMap(players);
// console.log(mapWeak);

// kouLei = null;
// console.log(mapWeak.get(kokiNiva));
// console.log(mapWeak.get(kouLei));

// ======================
// Errors handler

// callSomeFunction()
// const callRealFunction = () => 'It`s real function';

// function tryReturn(a, b) {
//   try {
//     callRealFunction();
//     // callSomeFunction();
//     console.log(`Application go on`);
//     return a + b;
//   } catch (error) {
//     console.log(`An error has been happened`);
//     console.log(error);
//   } finally {
//     console.log(`This message will print any way`);
//   }
// }

// console.log(tryReturn(1,2))

// Throw error

// class User {
//   constructor(userName, userAge) {
//     const age = parseInt(userAge);
//     if (Number.isNaN(age)) throw new TypeError(`Age must be a number`);
//     if (age < 0 || age > 150)
//       throw new RangeError(`Age must be between 0 and 150`);

//     this.name = userName;
//     this.age = age;
//   }

//   printProps() {
//     `Name is ${this.name}, age is ${this.age}`;
//   }
// }

// try {
//   const john = new User('John', '30');
//   console.log(john.printProps());
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Create own Error object

// class UserError extends Error {
//   constructor(value, options, ...params) {
//     super(...params);
//     this.name = 'UserError';
//     this.argument = value;
//     this.cause = options.cause ?? 'Common error';
//   }
// }

// class User {
//   constructor(userName, userAge) {
//     const age = parseInt(userAge);
//     if (Number.isNaN(age))
//       throw new UserError(
//         userAge,
//         { cause: 'Unexpected value' },
//         `Age must be a number`
//       );
//     if (age < 0 || age > 150)
//       throw new UserError(userAge, `Age must be between 0 and 150`);

//     this.name = userName;
//     this.age = age;
//   }

//   printProps() {
//     `Name is ${this.name}, age is ${this.age}`;
//   }
// }

// try {
//   const bill = new User('Bill', 40);
//   const garry = new User('Garry', 'jhfhg');
//   console.log(bill.printProps());
//   console.log(garry.printProps());
// } catch (error) {
//   if (error instanceof UserError) {
//     console.log(`Error type user. Incorrect value: ${error.argument}`);
//     console.log(`Error cause is ${error.cause}`);
//   } else {
//     console.log(error.message);
//   }
// }

//Symbol and iterator

const symb1 = Symbol('UserID');
const symb2 = Symbol('UserID');
console.log(symb1 === symb2);

const symb3 = Symbol.for('UserID');
const symb4 = Symbol.for('UserID');

console.log(symb1 === symb3);
console.log(symb3 === symb4);
console.log(Symbol.keyFor(symb4));

//Object props

const mySuperSecretPassword = Symbol('mySuperSecretPassword');
const myObject = {
  fullName: 'Bill',
};

myObject.myPassword = 'password';
myObject[mySuperSecretPassword] = 'qwerty_asdf';

for (let key in myObject) {
  console.log(`${key} = ${myObject[key]}`);
}

console.log(Object.keys(myObject));
console.log(myObject[mySuperSecretPassword]);
console.log(myObject);

// Iterator

const User = {
  fName: 'John',
  lName: 'Doe',
  age: 30,
  email: 'j-doe@gmail.com',
  phone: '+38(066)-342-25-75',
};

function iterFunction() {
  // return object iterator
  const arrEntries = Object.entries(this);
  let current = 0;
  let last = arrEntries.length;
  return {
    next() {
      if (current < last) {
        return {
          done: false,
          value: arrEntries[current++],
        };
      }
      return {
        done: true,
      };
    },
  };
}
User[Symbol.iterator] = iterFunction;

const props = [...User];
console.log(props);


