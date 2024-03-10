'use strict';

// import person, { getNewRate as getRate, user }  from './functions.js';

import * as functions  from './functions.js';


// First method to add listener
function showText() {
  console.log('Text');
}
// Second method to add listener
const secondPar = document.querySelector('#second-par');
// console.log(secondPar)
const showDomText = function () {
  console.log('Dom Text');
};
// secondPar.onclick = showDomText;
// Third method to add listener
const fNameInput = document.querySelector('#f-name');
const btnOk = document.querySelector('#btn-container > button:first-child');
function clickMe(event) {
  // console.log(this);
  console.log(event.target);
}
function clickOk(e) {
  e.preventDefault();
  console.log(this);
  console.log(`
        Event type is ${e.type},
        current turget is ${e.currentTarget},
        turget is ${e.target},
        x is ${e.clientX},
        y is ${e.clientY},
    `);
}
fNameInput.addEventListener('click', clickMe);
btnOk.addEventListener('click', clickOk);
// Pracice with new rate
let winRate;
let loosRate;

const winnerInput = document.querySelector('#win');
const looserInput = document.querySelector('#loose');
const newRateSpan = document.querySelector('#new-rate');
const btnCalculate = document.querySelector('.btn > button');

winnerInput.addEventListener('change', (e) => {
  winRate = Number(e.target.value);
  console.log(winRate);
});
looserInput.addEventListener('change', (e) => {
  loosRate = Number(e.target.value);
  console.log(loosRate);
});

function calculateNewRate(e) {
  e.preventDefault();
  const newRate = functions.getNewRate(winRate, loosRate);
  console.log(newRate);
  newRateSpan.textContent = newRate;
}

btnCalculate.addEventListener('click', calculateNewRate);

console.log(functions.user)

console.log(functions.default)

/* function getNewRate(winnerRate, looserRate) {
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
} */
