import Player from './Player.js';
import Bow from './Bow.js';
import Knife from './Knife.js';
import Arm from './Arm.js';

export default class Archer extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 35;
    this.attack = 5;
    this.agility = 10;
    this.description = 'Лучник';
    
    this.weapons = [new Bow(), new Knife(), new Arm()];
    this.weapon = this.weapons[0];
  }

  getDamage(distance) {
    if (distance > this.weapon.range) return 0;
    return (this.attack + this.weapon.getDamage()) * this.getLuck() * distance / this.weapon.range;
  }
}