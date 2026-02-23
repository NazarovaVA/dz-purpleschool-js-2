'use strict';

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