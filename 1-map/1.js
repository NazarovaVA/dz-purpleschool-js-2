'use strict';

const arr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const ids = [...new Set(arr.map(elem => elem.id))]; // [1,2]
const set = new Set(ids.map(idFromIds => arr.find(elem => elem.id === idFromIds)));
console.log(set);