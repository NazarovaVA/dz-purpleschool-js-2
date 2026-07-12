'use strict';

const counter = document.querySelector('.counter');
const container = document.querySelector('.buttons');

container.addEventListener('click', (event) => {
    const button = event.target.closest('.button');
    if (button){
        container.querySelectorAll('.button').forEach(btn => {
            btn.textContent = 'Нажми меня';
        });
        button.textContent = 'Нажата!';
        counter.textContent = Number(counter.textContent)+1;
    }
});