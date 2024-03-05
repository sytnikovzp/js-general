'use strict';

console.log(window);
console.log(window.innerHeight);

// const container = 10
// Find
const divContainer = document.getElementById('container');
const divImgContainer = document.getElementsByClassName('img-container');
console.dir(divContainer);
console.dir(divImgContainer);
console.log(document.images);
console.log(document.anchors);
console.log(document.links);
console.log(document.forms);
// console.dir(container);//Dont use this
// Create
const article = document.createElement('article');
const parArticle = document.createElement('p');
const textNode = document.createTextNode('Stiga');
const plainText = 'DHS';
console.log(article);
console.log(textNode);
divContainer.append(article);
article.append(parArticle);
parArticle.append('Donic');
parArticle.appendChild(textNode);
console.log(parArticle.textContent);
parArticle.textContent += ' Butterfly'
console.log(parArticle.textContent);
console.log(parArticle.innerHTML);
parArticle.innerHTML = 'TSP';
console.log(parArticle.textContent);
console.log(divContainer.cloneNode(true))
const clList = divContainer.classList;
clList.toggle('p-cont');
clList.toggle('p-cont');
console.log(clList)
console.log(divContainer.className)
console.log(divContainer.tagName)
console.log(divContainer.removeAttribute('class'))
