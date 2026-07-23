'use strict';

function timer(){
    const newYear = Number(new Date('01-01-2027'));
    const interval = setInterval(() => {
        const nowTime = Number(new Date());
        const res = newYear - nowTime;
        const months = Math.trunc(res / 2592000000);
        const days = Math.trunc((res % 2592000000) / 86400000);
        const hours = Math.trunc((res % 2592000000 % 86400000) / 3600000);
        const minutes = Math.trunc((res % 2592000000 % 86400000 % 3600000) / 60000);
        const seconds = Math.trunc((res % 2592000000 % 86400000 % 3600000 % 60000) / 1000);
        document.querySelector('.h2').innerText = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    },1000);
}

timer();