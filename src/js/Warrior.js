import Player from './Player.js';
import Sword from './Sword.js';

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = 'Воин';
    this.weapon = new Sword();
  }

  takeDamage(damage) {
    if (this.life < 50 && this.getLuck() > 0.8) {
      this.magic -= damage;
      if (this.magic < 0) {
        this.life += this.magic;
        this.magic = 0;
      }
    } else {
      super.takeDamage(damage);
    }
  }
}