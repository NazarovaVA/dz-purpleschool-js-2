'use strict';

function timer(){
    const newYear = Number(new Date('01-01-2027'));
    const interval = setInterval(() => {
        const nowTime = Number(new Date());
        const res = new Date(newYear - nowTime);
        document.querySelector('.h2').innerText = `${res.getMonth()} месяцев, ${res.getDate()} дней, ${res.getHours()} часов, ${res.getMinutes()} минут, ${res.getSeconds()} секунд`;
    },1000);
}

timer();