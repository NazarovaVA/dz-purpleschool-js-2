'use strict';

class Person {
    constructor(race,name,language){
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak(){
        console.log("Speak!");
    }
}

class Ork extends Person{
    constructor(race, name, language, weapon){
        super(race, name, language);
        this.weapon = weapon;
    }

    hit(){
        console.log("Hit!");
    }

    speak(){
        console.log("Ork speak!");
    }
}

class Elf extends Person{
    constructor(race, name, language){
        super(race,name,language);
        this.spells = [];
    }

    createSpell(spell){
        this.spells.push(spell);
        console.log(this.spells)
    }

    speak(){
        console.log("Elf speak!")
    }
}

const newPerson = new Person("slavik","Vasya","russian");
const newOrk = new Ork("afro","Malala","english","baton");
const newElf = new Elf("indian","Ralfe", "indian", []);

console.log(newPerson);
newPerson.speak();
console.log(newOrk);
newOrk.speak();
newOrk.hit();
console.log(newElf);
newElf.speak();
newElf.createSpell('abracadabra');
newElf.createSpell('bubububub');
console.log(newElf);