import Player from './Player.js';
import Staff from './Staff.js';
import Knife from './Knife.js';
import Arm from './Arm.js';

export default class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = 'Маг';
    
    this.weapons = [new Staff(), new Knife(), new Arm()];
    this.weapon = this.weapons[0];
  }

  takeDamage(damage) {
    if (this.magic > 50) {
      this.life -= (damage / 2);
      this.magic -= 12;
      if (this.life < 0) this.life = 0;
      if (this.magic < 0) this.magic = 0;
    } else {
      super.takeDamage(damage);
    }
  }
}