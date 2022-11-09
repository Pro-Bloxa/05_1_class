import Character from './app';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const bowerman = new Bowerman('Bowerman');
console.log(bowerman);
