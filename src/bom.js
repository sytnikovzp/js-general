'use strict';

// console.log(history);
// console.log(location);
// console.log(navigator);

// geolocation

// function success(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let altitude = position.coords.altitude;
//   let speed = position.coords.speed;

//   console.log(`Latitude is ${latitude}
//   longitude is ${longitude}
//   altitude is ${altitude}
//   speed is ${speed}
//   `);
// }

// function error(obj){
//   console.log('Geolocation error')
// }

// navigator.geolocation.getCurrentPosition(success, error)

// =========================================

// open

// function openWiki() {
//   let timeId;
//   try {
//     const popup = open(
//       'http://wikipedia.org',
//       '_blank',
//       'width=600,height=500'
//     );
//     console.log('Open Wiki');
//     popup.moveTo(500, 300);
//     // popup.close();
//     let timeId = setTimeout(() => popup.close(), 5000);
//   } catch (error) {
//     console.log('Error');
//   } finally {
//     clearTimeout(timeId);
//   }
// }

// const span = document.querySelector('span');
// span.addEventListener('click', openWiki);

// clock

// function getTime() {
//   const time = document.getElementById('time');
//   const now = new Date();
//   // console.log(now);
//   // console.log(now.getHours());
//   // console.log(now.getMinutes());
//   // console.log(now.getSeconds());
//   time.textContent = `
//   ${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}:
//   ${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}:
//   ${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}
//   `;
// }

// // getTime();

// const timeId = setInterval(getTime, 1000);

// === Cookies ====

// const now = new Date('03/09/24');

// console.log(now.toUTCString());
// // document.cookie = 'login=master';
// document.cookie = `expires=${now}`

// ====== local storage ===

localStorage.setItem('url', 'https://www.ttspin.club/');
localStorage.setItem('pass', 'ttspin.club/');
localStorage.setItem('test', 'club');

// console.log(localStorage.getItem('pass'));

// console.log(localStorage.getItem('url'));
localStorage.removeItem('url');
// const remove = console.log(localStorage.getItem('url'));

// console.log(remove);

localStorage.clear();

// console.log(localStorage)

// JSON

const player = {
  name: 'Ma Long',
  country: 'China',
  brand: 'Stiga',

  play() {
    console.log('I am playing');
  },
};

player.play()

const jsonStringify = JSON.stringify(player);

console.log(jsonStringify)

localStorage.setItem('MaLong', jsonStringify);
const malong = JSON.parse(localStorage.getItem('MaLong'));
console.log(malong);


const arr1 = [1,2,3,'Donic']

JSON.stringify()