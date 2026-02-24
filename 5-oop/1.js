'use strict';

const Person = function(race,name,language){
    this.race = race;
    this.name = name;
    this.language = language;
};

Person.prototype.speak = function(){
    console.log(this.name,this.language);
};

function Ork(race,name,language,weapon){
    Person.call(this,race,name,language);
    this.weapon = weapon;
}

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function(){
    console.log('Удар!');
}

function Elf(race,name,language,spells){
    Person.call(this,race,name,language);
    this.spells = spells;
}

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function(spell){
    this.spells.push(spell);
    console.log(this.spells);
}

const newPerson = new Person("slavik","Vasya","russian");
const newOrk = new Ork("afro","Malala","english","baton");
const newElf = new Elf("indian","Ralfe", "indian", []);

console.log(newPerson);
newPerson.speak();
console.log(newOrk);
newOrk.hit();
console.log(newElf);
newElf.createSpell('abracadabra');
newElf.createSpell('bubububub');
console.log(newElf);
