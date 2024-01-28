'use strict';

// Lopps

// While

let count = 12;

// while(count < 10){
//   console.log(count);
//   count++;
// }

// do while

// do {
//   console.log(count);
//   count--;
// } while (count < 10);

// For

let i = 1;

// for(; i < 10; i++){
//   console.log(`${i * 2}`);
// }

// for(; ; ){
//   console.log(`${i * 2}`);
//   i++;
//   if(i >= 10) break;
// }

// for(let i = 1; i < 10; i++){
//   if(i === 5) continue; // iteration no
//   console.log(`${i * 2}`);
// }

// Multiply table

// outer: for(let i = 1; i < 10; i++){
//   inner: for(let j = 1; j < 10; j++){
//     if (i === 5) continue outer;
//     if (j === 5) continue;
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// Task summ until 100

let number = 10;
let result = 0;

for (number; number <= 100; number++) {
  result += number;
}

console.log(result);
