import Warrior from './Warrior.js';
import Axe from './Axe.js';
import Knife from './Knife.js';
import Arm from './Arm.js';

export default class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    
    this.weapons = [new Axe(), new Knife(), new Arm()];
    this.weapon = this.weapons[0];
  }

  takeDamage(damage) {
    if (Math.random() < 1/6 && this.getLuck() > 0.5) {
      super.takeDamage(damage / 2);
    } else {
      super.takeDamage(damage);
    }
  }
}