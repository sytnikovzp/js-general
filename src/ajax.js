'use strict';
// XMLHttpRequest()
/* const xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
	console.log(xhr.response);
	console.log(xhr.status);
	localStorage.setItem('users', JSON.stringify(xhr.response));
}; */

// FETCH API
// GET
/* const source = 'users'
const myRequest = new Request(
    `https://jsonplaceholder.typicode.com/${source}`
)

fetch(myRequest)
    .then((res) => res.json())
    .then((json) => localStorage.setItem('users', JSON.stringify(json))); */
// ================================================
// POST
/* const postRequestJPH = async () => {
	const source = 'users';
	const url = `https://jsonplaceholder.typicode.com/${source}`;
    const body = {
        name: 'Jhon Doe',
        username: 'doe-jhon',
        email: 'doe.jhon@gmail.com',
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
    }
    const request = new Request(url, options)
    try {
        const response = await fetch(request);
        if(!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        console.log(json);
        localStorage.setItem('usersPost', JSON.stringify(json))
    } catch (error) {
        console.log('error', error.message)
    }
};
postRequestJPH(); */
// PUT
/* const putRequestJPH = async () => {
	const source = 'users';
	const url = `https://jsonplaceholder.typicode.com/${source}/1`;
    const body = {
        name: 'Jane Smith',
        username: 'jane',
        email: 'jane@gmail.com',
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    const options = {
        id: 1,
        method: 'PUT',
        body: JSON.stringify(body),
        headers,
    }
    const request = new Request(url, options)
    try {
        const response = await fetch(request);
        if(!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        console.log(json);
        // localStorage.setItem('usersPost', JSON.stringify(json))
    } catch (error) {
        console.log('error', error.message)
    }
};
putRequestJPH(); */
// PATCH
/* const patchRequestJPH = async () => {
	const source = 'users';
	const url = `https://jsonplaceholder.typicode.com/${source}/2`;
    const body = {
        email: 'jane.smith@gmail.com',
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    const options = {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers,
    }
    const request = new Request(url, options)
    try {
        const response = await fetch(request);
        if(!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        console.log(json);
        // localStorage.setItem('usersPost', JSON.stringify(json))
    } catch (error) {
        console.log('error', error.message)
    }
};
patchRequestJPH(); */
// DELETE
/* const delRequestJPH = async () => {
	const source = 'users';
	const url = `https://jsonplaceholder.typicode.com/${source}/3`;
    
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json; charset=UTF-8');
    const options = {
        method: 'DELETE',
    }
    const request = new Request(url, options)
    try {
        const response = await fetch(request);
        console.log(response);
        if(!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        // localStorage.setItem('usersPost', JSON.stringify(json))
    } catch (error) {
        console.log('error', error.message)
    }
};
delRequestJPH(); */
// =============Get nested resources=================
/* const nestedRequestJPH = async () => {
	const url = 'https://jsonplaceholder.typicode.com/albums/2/photos';
	const request = new Request(url);
	try {
		const response = await fetch(request);
    console.log(response);
    if(!response.ok) throw Error(response.statusText)
		const json = await response.json();
    console.log(json);
	} catch (error) {
    console.log('error', error);
  }
};
nestedRequestJPH(); */
// =============API OpenWeather=============
const param = {
	url: 'https://api.openweathermap.org/data/2.5/',
	appid: '0e6d1d3bff8e0a32e113767624f5060e',
	cityName: 'Dnipro',
	cityId: 709930,
};

function getWeather(){
    // Get weather by id
    // fetch(
    //     `${param.url}weather?id=${param.cityId}&units=metric&APPID=${param.appid}`
    // )
    // Get weather by city name
    fetch(
        `${param.url}weather?q=${param.cityName}&units=metric&APPID=${param.appid}`
    )
    .then((weather) => {
        console.log(weather);
        if(!weather.ok) throw new Error('Error')
        return weather.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}
getWeather()