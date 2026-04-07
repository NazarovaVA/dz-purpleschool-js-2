'use strict';

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
});
