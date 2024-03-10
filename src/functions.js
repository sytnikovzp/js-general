'use strict';


// Function Declaration
/* console.log(summ(40, 50));
function summ(a, b) {
	// console.log(a + b + c);

    function innerFunction(){}
	return a + b;
}

// console.log(summ(10, 20));


// Function Expression
const showDivide = function(c, d){
    return summ;
}


function callBack(c, func) {

}

callBack(10, summ);

console.log(showDivide())

const func1 = summ;

const newFunc = showDivide();

console.log(typeof newFunc)

console.log(newFunc(20, 40)) */

// Check age
/* let age = 20;
// let welcome;
if (age < 18) {
	function welcome() {
		console.log('You are too much young');
	}
	// welcome = function() {
	// 	console.log('You are too much young');
	// };
	welcome();
} else {
	function welcome() {
		console.log('You are enough adult');
	}
	// welcome = function () {
	// 	console.log('You are enough adult');
	// };
	welcome();
}
// welcome(); */

// Arrow functions

/* const function3 = (par1, par2) => {
	return par1 ** par2;
};

console.log(function3(8, 2)); */

//  Change global var as param
/* let brand = 'Stiga';

let ttBlade = 'Donic';

function changeArg(brand = 'TSP', ttBlade = 'Xiom') {
	// brand = 'Butterfly';
	// ttBlade = 'DHS';
	console.log(brand);
	console.log(ttBlade);
	return `${brand} + ${ttBlade}`;
}
console.log(changeArg());
console.log(brand);
console.log(ttBlade); */

/* function add(a, b) {
	return (a ?? 10) + (b ?? 20);
}

console.log(add()); */

//  Calculator
/* const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

const calculate = (num1, num2, mathOperation) => {
	if (Number.isNaN(num1 - num2)) {
		return 'Enter number, please!';
	}

	let operation;

	switch (mathOperation) {
		case '+': {
			operation = sum;
			break;
		}
		case '-': {
			operation = sub;
			break;
		}
		case '/': {
			operation = div;
			break;
		}
		case '*': {
			operation = mul;
			break;
		}
		default:
			console.log('Unknown math operation');
	}

	if (typeof operation === 'function') {
		return operation(num1, num2);
	} else {
		return 'Unknown math operation';
	}
};

const userInput1 = Number(Number(prompt('Enter first number')))
	? userInput1
	: console.log('Enter number, please!');
const userInput2 = Number(prompt('Enter second number'));
const mathOperation = prompt('Enter math operation');

const result = calculate(userInput1, userInput2, mathOperation);

console.log(result); */

/* const mul = (a, b) => a * b;

const noPureFunction = (a, b) => {
    a = a * Math.random(); 
    return a + b;
}
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20));
console.log(noPureFunction(10, 20)); */

/* let c = 10;

const add1 = (d) => (c += d);

console.log(add1(10));
console.log(c); */
// Stack
// debugger
/* function greet(person) {
	console.log(`Hello ${person}`);
}
greet('Jhon');
console.log('Bye-bye'); */
//  Maximum
// debugger
/* function chicken() {
	return egg();
}

function egg() {
    return chicken();
}

console.log(chicken()); */

/* const showSmth = (str) => {
    // console.log(`${str} + smth`);
    function aaa(){
		let bb = 'bb';
		console.log(str)
    }
	// console.log(bb);
    return `${str} + smth`;
    // return console.log(`${str} + smth`);
}

// showSmth('Stiga')
console.log(showSmth('Stiga')); */

// Documentation JSDoc
/**
 *
 * @param {number} ballAmount
 * @param {number} wall
 * @param {number} diameter
 * @returns {number} - amount of volumes
 */
/* function getVolumes(ballAmount, wall, diameter){
    let result = 0;
    for(let i = 1; i <= ballAmount; i++){
        let innerDiam = diameter + 2 * wall * (i-2);
        let volume = Math.PI * innerDiam ** 3 / 6;
        result += volume;
    }
    return result.toFixed(5);
}

const volumes = getVolumes(12, 0.01, 0.5);
console.log(volumes);

getVolumes() */

/* let constFunction = new Function(['arg1', 'arg2'], 'return arg1 + arg2');

console.log(constFunction(10, 20));
console.log(constFunction); */

// Counter
/* let count = 0;
function counter() {
	// let count = 0;
	return ++count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter()); */
// Var2
// debugger
/* function counter() {
	let count = 0;

	return function(){
		count++;
		return count;
	}
}

const counter1 = counter();
const counter2 = counter(); */
/* console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log('-----------');
console.log(counter2());
console.log(counter2());
console.log(counter2()); */

/* 
let c
{
	let a = 10;
	lexEnv = {
		envRecord: {
			a: 10,
			this
			}
		link => outerEnv
	}
}
*/

/* let name = 'John';

function sayHi() {
	console.log('Hi, ' + name);
}

name = 'Pete';

sayHi(); */

// Recursion
// Fibonacci
// 1, 1, 2, 3, 5, 8, 13
// Iterration
/* function fib(n) {
	let fib1 = 1;
	let fib2 = 1;
	for (let i = 3; i <= n; i++) {
		const fibNext = fib1 + fib2;
		fib1 = fib2;
		fib2 = fibNext;
	}
	return fib2;
}

console.log(fib(7)); */
// Fib recursion
// debugger
/* function fibonacci(position) {
	if (position < 3) {
		return 1;
	}
	return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(10)); */
// Send email
// Structure
/* const companyEmailAddresses = {
	finance: ['jill@companyx.com', 'frank@companyx.com'],
	engineering: {
		qa: ['ahmed@companyx.com', 'taylor@companyx.com'],
		development: [
			'cletus@companyx.com',
			'bojangles@companyx.com',
			'bibi@companyx.com',
		],
	},
	management: {
		directors: [
			'tanya@companyx.com',
			'odell@companyx.com',
			'amin@companyx.com',
		],
		projectLeaders: [
			'bobby@companyx.com',
			'jack@companyx.com',
			'harry@companyx.com',
			'oscar@companyx.com',
		],
		hr: ['mo@companyx.com', 'jag@companyx.com', 'ilaria@companyx.com'],
	},
	sales: {
		business: {
			senior: ['larry@companyx.com', 'sally@companyx.com'],
		},
		client: {
			senior: ['jola@companyx.com', 'amit@companyx.com'],
			exec: ['asha@companyx.com', 'megan@companyx.com'],
		},
	},
}; */

//
/* function sendEmail(emailAddress) {
	console.log(`sending email to ${emailAddress}`);
} */
// Iteration
/* function gatherEmailAddresses(departments) {
	let departmentKeys = Object.keys(departments);
	for (let i = 0; i < departmentKeys.length; i++) {
		if (Array.isArray(departments[departmentKeys[i]])) {
			departments[departmentKeys[i]].forEach((email) => sendEmail(email));
		} else {
			for (let dept in departments[departmentKeys[i]]) {
				if (Array.isArray(departments[departmentKeys[i]][dept])) {
					departments[departmentKeys[i]][dept].forEach((email) =>
						sendEmail(email)
					);
				} else {
					for (let subDept in departments[departmentKeys[i]][dept])
						if (
							Array.isArray(
								departments[departmentKeys[i]][dept][subDept]
							)
						) {
							departments[departmentKeys[i]][dept][
								subDept
							].forEach((email) => sendEmail(email));
						}
				}
			}
		}
	}
} */

// Recursion
/* function gatherEmailAddresses(departments) {
	let departmentKeys = Object.keys(departments);
	departmentKeys.forEach((dept) => {
		if (Array.isArray(departments[dept])) {
			return departments[dept].forEach((email) => sendEmail(email));
		}
		return gatherEmailAddresses(departments[dept]);
	});
}

gatherEmailAddresses(companyEmailAddresses); */

/* function sum(n) {
	return n === 0 ? 0 : n + sum(n - 1);
}

console.log(sum(10473)); */
// debugger
/* function findSolution(target){
	function find(current=1, history='1'){
		if(current === target){
			return history;
		}
		if(current > target){
			return null;
		}
		return (
			find(current + 5, `(${history} + 5)`) ||
			find(current * 3, `(${history} * 3)`)
		);
	}
	return find();
}

console.log(findSolution(102)); */
// Get winner rate
export function getNewRate(winnerRate, looserRate) {
	const deltaRate = winnerRate - looserRate;
	if (
		winnerRate < 0 ||
		looserRate < 0 ||
		typeof winnerRate !== 'number' ||
		typeof looserRate !== 'number' ||
		Number.isNaN(deltaRate)
	) {
		return 'You entered wrong rate';
	}
	if (winnerRate === 0) {
		return looserRate;
	}
	if (deltaRate >= 0 && deltaRate <= 2) {
		return winnerRate + 2;
	}
	if (deltaRate > 2 && deltaRate < 20) {
		return winnerRate + 1;
	}
	if (deltaRate >= 20) {
		return winnerRate;
	}
	if (deltaRate < 0) {
		return winnerRate + Math.round((Math.abs(deltaRate) + 5) / 3);
	}
} 

export const user = {
	fName: 'John',
	lName: 'Doe',
	age: 25,
}

// export default const person = {
// 	fName: 'Jane',
// 	lName: 'Smith',
// 	age: 20,
// }
// we have to export this function