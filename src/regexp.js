'use ctrict';

// create RexExp
let str1 = 'Malong';
let str2 = 'Trolo Trololo TroLolo';

let reg1 = /lo/gi;
let reg2 = new RegExp(str1, 'gi');
let reg3 = new RegExp(true);
console.log(reg3);

let reg4 = new RegExp({});
console.log(reg4);

// string methods
const arrMatch = str2.match(reg1);
console.log(arrMatch);

console.log(str2.search(reg1));
console.log(str2.replace(reg1, 'NO'));

console.log(str2.split(reg1));

// RegExp methods

console.log(reg1.test(str2));

console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));

console.dir(reg1);

// Flags
// i - ignore care S === s
// g - global All text in string
// u - full support unicode
// s - dotAll
// m - multistring search ^ - start text in str /$ - end text in str
// y - position in the text

// Symbol groups and metasymbol

let str3 = 'Donic Stiga DHS TSP Bonic';
const reg5 = /[oin]/g;
const reg6 = /[A-Za-z]/g;
const reg7 = /[А-Я]/g;
const reg8 = /[^А-Я]/g; // exclude any symbols

console.log(reg7.test(str3));

// \w - [A-Za-z0-9_]
// \W - [^A-Za-z0-9_]
// \d - 0-9
// \D - ^0-9
// \s - space
// \S - ^space
// . - any symbol only with \S
// \b - word border
// \B - no word border

const str6 = 'Programing language: Java, JavaScript';

const reg9 = /\bJava\b/g;

const langArray = str6.replace(reg9, 'C#');
console.log(langArray);

// Modifiers

const password = 'qqqq';

function checkPassword(str) {
  const reg = /^\w{8,15}$/g;
  if (reg.test(str)) {
    return 'success';
  }
  return 'error';
}

console.log(checkPassword(password));

const email = '123@gmail.com';

function checkEmail(str) {
  const reg = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
  if (reg.test(str)) {
    return 'success';
  }
  return 'error';
}

console.log(checkEmail(email));

// Groups

let htmlImg = '<img src="picture.jpg"/>';

const regHtml = /[a-z]+\.(?<extend>jpg|png|gif)/i;
const res = htmlImg.match(regHtml);

console.log(res);

const strDate = '2021-09-06';

const dateReg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const res1 = dateReg.exec(strDate);

console.log(res1[0]);
console.log(res1[1]);
console.log(res1);
console.log(res1.groups);
console.log(res1.groups.year);





