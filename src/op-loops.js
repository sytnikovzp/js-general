'use strict';

// Operators
// let a = 20;
// let b = 30;

// a = a + 2;
// a += 2;
// a /= 11;
// a *= 10;
// a **=3;
// a %= 10;

// console.log(a);

// b = b + 1;
// b += 1;
// b++;
// b--;

// ++b;
// --b;

// console.log(50 - b--);
// console.log(b);
// console.log(50 - b--);

// console.log(50 - ++b);
// console.log(b);
// console.log(50 - --b);
// console.log(b);


// Op && and ||

let ms = 60;
let kms = 50;
let myRate = 40;

// if (myRate >= kms && myRate < ms){
// // if (myRate >= kms || myRate < ms){ If 1 is true
//   console.log('I am a KMS');
// } else if (myRate >= ms){
//   console.log('I am MS')
// } else {
//   console.log('A am just sportsman')
// }

let res = myRate >= kms || myRate >= ms 
            ? console.log('I am MS')
            : console.log('A am just sportsman');


// let result = myRate >= kms || myRate >= ms || kms > ms;
// let result = myRate >= kms && myRate <= ms && kms < ms;
// let result = 20 || '' || 'dsd';

let result1 = myRate >= kms || myRate >= ms || 'A am just sportsman';


// console.log(result1);

let c = 0;

// console.log(c || 10);

// console.log(c ?? 20);
// // work on null or undefined

