'use strict';
import { newRateSpan } from './events.js';
// Callback hell
/* setTimeout(function () {
    console.log('Its first callback');
    setTimeout(function () {
            console.log('Its second callback');
            setTimeout(function () {
                    console.log('Its third callback');
                    setTimeout(function () {
                            console.log('Its fourth callback');
                          }, 2000)
                  }, 2000)
          }, 2000)
    }, 2000) */
// Promise
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => reject(new Error('Smth went wrong')), 2000);
// 	setTimeout(() => resolve('Is done'), 2000);
// });
/* .then((value) => {
		console.log(value);
		return value + ' it all';
	})
    .finally(() => console.log('I print this anyway'))
	.then((done) => {
		console.log(done);
        newRateSpan.textContent = done;
        return `${done} add smth else`
	})
    .then((str) => {
        console.log(str);
        return str
    })
    // .then(null, (error) => {
    //     console.log(error.message);
    //     newRateSpan.textContent = error.message;
    // }) 
    .catch((error) => {
        console.log(error.message);
        newRateSpan.textContent = error.message;
        return error.message;
    })
*/
// promise.then((value) => value + 'Smth')

// console.log(promise);
// Function return promise
/* function sum(a, b){
    return new Promise((resolve) => {
        const result = a + b;
        resolve(result);
    })
}

sum(5, 20)
    .then((value) => `${value}$`)
    .then(summ => console.log(summ)) */
// Promise API
// method all()
// const p1 = Promise.resolve(3);
// let p2 = 137;
// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => reject('Stiga'), 1000);
// 	setTimeout(() => resolve('Stiga'), 1000);
// 	// setTimeout(resolve, 1000, 'Stiga');
// });
// const arrPromise = [promise, p3];

/* Promise.all(arrPromise)
    .then(values => {
        console.log(values)
    })
    .catch((error) => {
        console.log(error);
    }) */
// method allSettled()
/*Promise.allSettled(arrPromise)
    .then((values) => {
	console.log(values);
        }) */
// method race()
/* Promise.race(arrPromise)
.then(values => {
    console.log(values)
})
.catch((error) => {
    console.log(error.message);
}) */
// method any()
/* Promise.any(arrPromise)
	.then((values) => {
		console.log(values);
	})
	.catch((error) => {
		console.log(error.errors);
	}); */
// Async-Await
// async function asFunc(){
//     const value = await Promise.resolve(result + '$')
//     return 'done';
// }

// console.log(asFunc())
const summ = async (a, b) => {
	try {
		const result = a + b;
		const value = await Promise.resolve(result + '$');
		console.log(value);
		const final = `${value} the end`;
		console.log(final);
		return final;
	} catch (error) {
		console.log(error);
	} finally {
		console.log('I print this anyway');
	}
};
console.log(summ(10, 20));
// Event Loop
/* let i = 0;
let start = Date.now();

function count(){
    for(let j = 0; j < 1e9; j++){
        i++;
    }
    console.log(i);
    console.log(`It done for ${Date.now() - start} ms`)
}
count() */

let i = 0;

function showProgress() {
	do {
		i++;
		progress.innerHTML = i;
	} while (i % 1e3 !== 0);

	if (i < 1e6) {
		setTimeout(showProgress);
		// queueMicrotask(showProgress);
	}
}

showProgress();
