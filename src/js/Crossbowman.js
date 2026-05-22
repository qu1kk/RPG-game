import Archer from './Archer.js';
import LongBow from './LongBow.js';
import Knife from './Knife.js';
import Arm from './Arm.js';

export default class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.life = 85;
    this.attack = 8;
    this.agility = 20;
    this.luck = 15;
    this.description = 'Арбалетчик';
    
    this.weapons = [new LongBow(), new Knife(), new Arm()];
    this.weapon = this.weapons[0];
  }
}