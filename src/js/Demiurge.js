import Mage from './Mage.js';
import StormStaff from './StormStaff.js';
import Knife from './Knife.js';
import Arm from './Arm.js';

export default class Demiurge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = 'Демиург';
    
    this.weapons = [new StormStaff(), new Knife(), new Arm()];
    this.weapon = this.weapons[0];
  }

  getDamage(distance) {
    let damage = super.getDamage(distance);
    if (this.magic > 0 && this.getLuck() > 0.6) {
      return damage * 1.5;
    }
    return damage;
  }
}