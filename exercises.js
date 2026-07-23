'use strict';

/*
let weatherMap = new Map([
    ['London', 10],
    ['Moscow', 7],
    ['Paris',14],
]);

const weatherMap2 = new Map([...weatherMap].map(elem => elem.reverse()));

console.log(weatherMap2);
*/

/*
function R(minNum, maxNum){
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

console.log(R(1,20));
*/

/*
function convert(sum, initialCurrency, convertCurrency) {
	const allCurrencies = [
		{ name: 'USD', mult: 1 },
		{ name: 'RUB', mult: 1/60 },
		{ name: 'EUR', mult: 1.1 },
	];
	const initial = allCurrencies.find(c => c.name === initialCurrency);
	if (!initial) {
		return null;
	}
	const convert = allCurrencies.find(c => c.name === convertCurrency);
	if (!convert) {
		return null;
	}
	return new Intl
		.NumberFormat('ru-RU', { style: 'currency', currency: convert.name })
		.format(sum * initial.mult / convert.mult);
}

console.log(convert(10000, 'RUB', 'USD'));
console.log(convert(10000, 'RUB', 'EUR'));
console.log(convert(100, 'USD', 'RUB'));
console.log(convert(100, 'USD', 'EUR'));
console.log(convert(100, 'EUR', 'RUB'));
console.log(convert(100, 'TG', 'RUB'));
console.log(convert(100, 'EUR', 'TG'));
*/

/*
function f(dice){
    const arr = [
        {id: 'd4', end: 4},
        {id: 'd6', end: 6},
        {id: 'd8', end: 8},
        {id: 'd10', end: 10},
        {id: 'd12', end: 12},
        {id: 'd16', end: 16},
        {id: 'd20', end: 20},
    ];
    const maxNum = (arr.find(elem => elem.id === dice)).end;
    return Math.floor(Math.random() * maxNum + 1);
}

console.log(f('d10'));
*/

/*
const user = {
    name: 'Vasya',
    birthday: '02/23/2026',
};

function isBirth(user){
    const userBirth = new Date(user.birthday);
    return (userBirth.getMonth() === (new Date()).getMonth() && userBirth.getDate() === (new Date()).getDate());
};

console.log(isBirth(user));
*/

/*
function timer(time){
    const t = time;
    const interval = setInterval(() => {
        time = time - 1000;
        console.log(new Intl.DateTimeFormat('ru-RU',{minute: 'numeric', second: 'numeric'}).format(new Date(time)))
    },1000);
    setTimeout(() => {clearInterval(interval); console.log('🍕!!!')},t);
}

timer(300000);
*/

/*
const product = {
    id: 1,
    name: 'Bread',
    count: 1,
};

const Cart = function(){
    this.products = [];
}

Cart.prototype.addProduct = function(product){
    if (this.products.find(product => product.id === product.id)){
        return;
    }
    this,product.push(product)
}

Cart.prototype.increaseAmount = function(id){
    this.products = this.products.map(product => {
        if (product.id == id){
            product.count++;
            return product;
        };
        return product;
    }).filter(product => product.count > 0);
}

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);

console.log(cart);
*/

/*
class User{
    #login;
    #_password;

    constructor (login,password){
        this.#login = login;
        this.#password = password;
    }

    set #password(pass){
        this.#_password = pass.split('').reverse().join('');
    }

    get #password(){
        return this.#_password.split('').reverse().join('');
    }

    get login(){
        return this.#login;
    }

    checkPassword(pass){
        return this.#password === pass;
    }

    changePassword(oldPassword, newPassword){
        if (!this.checkPassword(oldPassword)){
            return false;
        }
        this.#password = newPassword;
        return true;
    }
}

const user = new User('wertyu@a.ru','1234');
console.log(user.login);
*/

/*
class Car{
    #_stamp;
    #_model;
    #_mileage;
    constructor (stamp,model,mileage){
        this.#_stamp = stamp;
        this.#_model = model;
        this.#_mileage = mileage;
    };
    get mileage(){
        return this.#_mileage;
    };
    set mileage(newMileage){
        this.#_mileage = newMileage;
    }
     info(){
        console.log(this.#_stamp, this.#_model, this.#_mileage);
     }
};

const BMW = new Car('BMW','X5',30000);
BMW.info();
BMW.mileage = 0;
BMW.info();
*/

/*
class Enemy {
	health;
	constructor(health) {
		this.health = health;
	}

	recieveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
}

class Sword {
	#damage;
	constructor(damage) {
		this.#damage = damage;
	}

	strike(enemy) {
		enemy.recieveDamage(this.#damage);
	}
}

class Orc extends Enemy {
	constructor(health) {
		super(health);
	}

	recieveDamage(damage) {
		if(Math.random() > 0.5) {
			this.health = this.health - damage;
		}
		console.log(this.health);
	}
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
*/

/*
let arr = [];

fetch('https://dummyjson.com/products/categories')
    .then(
        response => response.json()
    )
    .then(data => { 
        arr = data;
        console.log(arr);
        arr.forEach(el => {
            Add(el.name);
        })
    }
    )
    .catch(
        error => console.log(error)
    )

function Add(text){
    const newEl = document.createElement('option');
    newEl.innerText = text;
    document.querySelector('.select').appendChild(newEl);
}
*/


/*
const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load',function(){
    const s = JSON.parse(this.responseText);
    const url = s.abilities[0].ability.url;

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load',function(){
        const data = JSON.parse(this.responseText);
        console.log((data.effect_entries.find(el => el.language.name === 'en')).effect);
    });
});*/

/*
function myFetch(url){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();

        request.addEventListener('load', function() {
            
        })
    })
}
*/

/*
let promise = Promise.reject(new Error('Error thrown'));

promise.catch(error => {
  console.log(error.message);
});
*/

/*
function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

async function getMyCity() {
  try {
    // Шаг 1: получить координаты
    const { latitude, longitude } = await getMyCoordinates();

    // Шаг 2: запрос к API геокодирования
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );

    // Проверка успешности ответа
    if (!response.ok) {
      throw new Error(response.status);
    }

    // Шаг 3: разбор JSON-ответа
    const data = await response.json();

    // Шаг 4: вывод города
    console.log(data.city);

  }
  catch (error) {
    console.error(error);
  }
}

getMyCity();
*/