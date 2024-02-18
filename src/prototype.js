'use strict';

function Country(title = 'Ukraine', capital = 'Kiev') {
  this.title = title;
  this.capital = capital;
  // this.getInfo = function () {
  //   return `Capital is ${this.capital}`;
  // };
}

Country.prototype.getInfo = function () {
  return `Capital is ${this.capital}`;
};

const ukraine = new Country();
const usa = new Country('USA', 'Washington');

console.log(ukraine.getInfo());
console.log(usa.getInfo());

console.log(ukraine.getInfo === usa.getInfo);

console.log(ukraine);

console.log(usa instanceof Country);
console.log(usa instanceof Array);


