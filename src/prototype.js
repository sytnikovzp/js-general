'use strict';

function MyArray(...args) {
	this.length = 0;
	// this.push = function (item) {
	// 	this[this.length] = item;
	// 	return ++this.length;
	// };
	for (let i = 0; i < args.length; i++) {
		this.push(args[i]);
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

console.log(arr.push === arr1.push);
console.log(myArr.push === myArr1.push);

console.log(myArr);
console.log(myArr1.pop());
console.log(MyArray.isMyArray(arr));

console.dir(MyArray);

function MyArrayProto() {
	this.push = function () {
		if (arguments) {
			for (let i = 0; i < arguments.length; i++) {
				this[this.length++] = arguments[i];
			}
		}
		return this.length;
	};
	this.pop = function () {
		if (this.length === 0) {
			return;
		}
		const lastItem = this[this.length - 1];
		delete this[--this.length];
		return lastItem;
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
		return false;
	};

	this.every = function (fn) {
		for (let i = 0; i < this.length; i++) {
			if (!fn(this[i], i, this)) {
				return false;
			}
		}
		return true;
	};

	// map
	this.map = function (fn) {
		const res = new MyArray();
		for (let i = 0; i < this.length; i++) {
			res.push(fn(this[i], i, this));
		}
		return res;
	};

	// concat
	this.concat = function (...args) {
		const res = new MyArray();
        this.forEach(el => {
            res.push(el)
        })
		for (let i = 0; i < args.length; i++) {
			if (Array.isArray(args[i])) {
				res.push(...args[i]);
			} else if (MyArray.isMyArray(args[i])) {
				for (let j = 0; j < args[i].length; j++) {
					res.push(args[i][j]);
				}
			} else {
				res.push(args[i]);
			}
		}
		return res;
	};

	// reverse
	this.reverse = function () {
		const lengthMinusOne = this.length - 1;
        // let temp;
		for (let i = 0; i < Math.floor(this.length / 2); i++) {
			// temp = this[i];
			// this[i] = this[lengthMinusOne - i];
			// this[lengthMinusOne - i] = temp;
            [this[i], this[lengthMinusOne - i]] = 
            [this[lengthMinusOne - i], this[i]]
		}
        return this;
	};

    
}


// const arrArr = [1, [2,3], [4, [5, 6, [7, 8, [9,10,[11,12]]]]]]
// const myArrArr = new MyArray([2, 3], [4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]);
const myArrArr = new MyArray(
    new MyArray(1, 2, new MyArray(3,4, new MyArray(5,6, new MyArray(7, 8)))));


console.log(myArrArr);
// console.log(myArrArr.flat(10));

console.log(myArr1)
console.log(myArr1.reverse())

// const myArrMix = new MyArray(1);
const arrConcat = myArr.concat([1, 3], true, myArr1)
console.log(arrConcat);
console.log(myArr);

// destucture
let a = 10;
let b = 100;

[a, b] = [b, a];

console.log(a)
console.log(b)
const person = ['Jhon', 'Doe'];

let [fName, lName] = person;

// let fName = person[0];
// let lName = person[1];
console.log(fName)
console.log(lName);
// distructure array
const countryArr = ['Ukraine', 'Kiev', 1000, 200, 'Zelenskyy']
const info = {};
let [country, capital, ,...args] = countryArr;
[info.country, info.capital, , info.area] = countryArr;
console.log(country);
console.log(capital);
// console.log(area);
console.log(args);
console.log(info);
console.log(countryArr);
// distructure object
info.region = ['Dnipro', 'Zapp', 'Odessa']
let { 
	country: countr = 'USA', 
	capital: capi ='Washington', 
	area = 300,
	region
 } = info;

console.log(countr);
console.log(capi);
console.log(area);
console.log(region);