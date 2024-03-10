'use strict';

const container = document.getElementById('container')

function random(number){
    return Math.floor(Math.random() * number);
}

function bgChange(){
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function setBackground(e){
    // e.stopPropagation();
    console.log(e.target)
    console.log(e.currentTarget)
    e.target.style.backgroundColor = bgChange();
}

container.addEventListener('click', setBackground)