'use strict';

function MyArray(...args) {
  this.length = 0;
  // this.push = function (item) {
  //   this[this.length] = item;
  //   return ++this.length;
  // };
  for (let i = 0; i < args.length; i++) {
    this.push = args[i];
  }
}

MyArray.isMyArray = function (obj) {
  return obj instanceof MyArray;
};

MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(10);
const myArr1 = new MyArray(100, 500, 700, 900, 1000);

const arr = [20, 30];
const arr1 = [];

// console.log(arr.push === arr1.push);
// console.log(myArr.push === myArr1.push);

// console.log(myArr);
// console.log(myArr1);

// console.dir(MyArray);

// console.log(MyArray.isMyArray(arr));
// console.log(MyArray.isMyArray(myArr));

function MyArrayProto() {
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return; // undefined
    } else {
      const lastItem = this[this.length - 1];
      delete this[--this.length];
      return lastItem;
    }
  };
  this.forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };

  this.some = function (fn) {
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        return true;
      }
    }
  };
  return false;
}

this.map = function (fn) {
  const res = new MyArray();
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

this.concat = function (...args) {
  const res = new MyArray();
};

// console.log(myArr1);
// console.log(MyArray.pop);

//destructure array

const contryArr = ['Ukraine', 'Kiev', 1000, 200, 'Zelenskyy'];

// const [contry, capital, , area] = contryArr;
const [contry, capital, ...args] = contryArr;

// console.log(contry);
// console.log(capital);
// console.log(area);
// console.log(args);
// console.log(contryArr);
 
// destructure object

// let {country, capital, area} = info;

// console.log(const)
// console.log(cap)
// console.log(area)