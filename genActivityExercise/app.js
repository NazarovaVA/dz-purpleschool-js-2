'use strict';

const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('button');
const select = document.querySelector('#sel');

async function getActivity(type) {
    let response;
    if (type === 'all'){
        response = await fetch('https://bored.api.lewagon.com/api/activity');
    }
    else{
        response = await fetch(`https://bored.api.lewagon.com/api/activity?type=${type}`)
    }
    return response.json();
}

async function generate(type) {
    try {
        wrapper.innerHTML = "Loading...";
        const data = await Promise.all([
            getActivity(type),
            getActivity(type),
            getActivity(type)
        ]);
        wrapper.innerHTML = "";
        for (const item of data) {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="text">${item.activity}</div>
                <div class="heart">
                    <object data="heart.svg" type="image/svg+xml" width="70" height="70"></object>
                </div>`
            element.classList.add('activity')
            wrapper.appendChild(element);
        }
    }
    catch (error) {
        wrapper.innerHTML = "Error :(";
        console.error(error);
    }
}

button.addEventListener('click', () => {
    generate(select.value);
});