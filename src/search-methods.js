'use strict';

// let a;
// forEach()
const arr1 = [1, 2, 3, 8, 11];
// console.log(arr1);
/* console.log(arr1.forEach((el, i, arr1) => {
    arr1[i] = el * 5;
})); */

// console.log(arr1)
//  Own implementation of forEach
function myForEach(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		callback.call(thisArg, arr[i], i, arr);
	}
}
myForEach(arr1, (el) => {
	console.log(el);
});
// Find
const arr2 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];

console.log(arr2.findIndex((el) => el === 'DHSs'));
console.log(arr1.findLastIndex((el) => el % 2 === 0));

// map
const strIntArr = ['1', '5', '10'];
const parseToInt = (item) => parseInt(item) * 10;
// const intArr = strIntArr.map(parseToInt);
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
// Some - Every
const arr3 = [2, 12, 18];

console.log(arr3.some((el) => el % 2 !== 0));
console.log(arr3.every((el) => el % 2 === 0));
//  Own implementation of some()

const mySome = (arr, callback, thisArg) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback.call(thisArg, arr[i], i, arr)) {
			return true;
		}
	}
	return false;
};
console.log(mySome(arr3, (el) => el % 2 === 0));

const myEvery = (arr, callback, thisArg) => {
	for (let i = 0; i < arr.length; i++) {
		if (!callback.call(thisArg, arr[i], arr)) {
			return false;
		}
	}
	return true;
};
// Filter
const arr4 = [1, 2, 3, 8, 9, 2658, 3157];
const arr5 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];
const doe = {
    fullName: 'Jhom Doe',
    role: 'moderator'
}
const smith = {
    fullName: 'Jane Smith',
    role: 'admin'
}
const persons = [doe, smith]
console.log(arr4.filter((el) => el > 8));
console.log(arr5.filter((el) => el[0] === 'D'));
console.log(persons.filter((el) => (el.role === 'admin')));

// Imp filter
function myFilter(arr, callback, thisArg) {
    const res = [];
    for(let i = 0; i < arr.length; i++){
        if(callback.call(thisArg, arr[i], i, arr)){
            res.push(arr[i])
        }
    }
    return res;
}
// Reduce and ReduceRight
// Pseudocode
/* 
    array.reduce(callback, [intialValue]);
    callback(accum, currentValue, [index, array]);
    if(intialValue){
        accum = intialValue;
        currentValue = array[0];
    }else{
        accum = array[0];
        currentValue = array[1];
    }
*/
const emptyArr = [];
console.log(emptyArr.reduce((a, b) => a + b, 100));

const friends = [
    {name: 'Ann', books: ['HP', 'Python'], age: 20},
    {name: 'Jhon', books: ['JS', 'Hibernate'], age: 25},
    {name: 'Bill', books: ['Java', 'SQL'], age: 30},
]

const allBooks = friends.reduce((prev, curr) => [...prev, ...curr.books], []);

console.log(allBooks);
// Own reduce
const myReduce = (arr, callback, startValue) => {
    let result;
    if(startValue){
        result = startValue;
        for(let i = 0; i < arr.length; i++){
           result = callback(result, arr[i], i, arr);
        }
    }else{
        result = arr[0];
        for(let i = 0; i < arr.length - 1; i++){
            result = callback(result, arr[i+1], i, arr);
        }
    }
    return result;
}

const arrArr = [
    [1,2],
    [3,4],
    [5,6],
]
// arrArr = []

console.log(myReduce(arrArr, (a, b) => a.concat(b)))