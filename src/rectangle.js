'use strict';

const rootSquare = document.querySelector('#square1');
const secondSquare = document.querySelector('#square2');
const thirdSquare = document.querySelector('#square3');

rootSquare.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('1');
});

secondSquare.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('2');
});

secondSquare.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('2-2');
  console.log(e.target);
  console.log(e.currentTarget);
  // console.log(this)
});

thirdSquare.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('3');
});
