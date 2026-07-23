'use strict';

function getData(url, errorMessage){
    return fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error(`${errorMessage} ${response.status}`)
        }
        return response.json()
    })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Ошибка при получении покемона:(')
    .then((data) => {
        const url = data.abilities[0].ability.url;
        return getData(url,'Ошибка при получении данных об умении :((((')
    })
    .then((abilityData) => {
        const eff = abilityData.effect_entries.find(el => el.language.name === 'en');
        console.log(eff.effect);
    })
    .catch(error => {
        console.log('Ошибка :(', error.message)
    })