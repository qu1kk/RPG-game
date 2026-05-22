import Arm from './Arm.js';

export default class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.position = position;
    this.name = name;
    
    // Делаем массив оружия, чтобы при поломке брать следующее
    this.weapons = [new Arm()]; 
    this.weapon = this.weapons[0];
  }

  getLuck() {
    return (Math.random() * 100 + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) return 0;
    return (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life = Math.max(this.life - damage, 0);
  }

  isDead() {
    return this.life === 0;
  }

  // Новые методы

  moveLeft(distance) {
    // Идем не дальше, чем позволяет скорость
    this.position -= Math.min(distance, this.speed);
  }

  moveRight(distance) {
    this.position += Math.min(distance, this.speed);
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(-distance);
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage); // Блок: урон в оружие
    } else if (this.dodged()) {
      // Уворот: ничего не происходит
    } else {
      this.takeDamage(damage); // Обычный урон
    }
  }

  checkWeapon() {
    // Если текущее оружие сломано, ищем в карманах следующее целое
    if (this.weapon.isBroken()) {
      for (let i = 0; i < this.weapons.length; i++) {
        if (!this.weapons[i].isBroken()) {
          this.weapon = this.weapons[i];
          break;
        }
      }
    }
  }

  tryAttack(enemy) {
    let distance = Math.abs(this.position - enemy.position);
    
    // Если стоят на одной клетке
    if (distance === 0) {
      this.weapon.takeDamage(10 * this.getLuck());
      let damage = this.getDamage(1); // Для формулы дистанция = 1
      enemy.moveRight(1); // Враг отскакивает
      enemy.takeAttack(damage * 2); // Двойной урон
    } else {
      // Если враг далеко
      if (this.weapon.range < distance) return;
      this.weapon.takeDamage(10 * this.getLuck());
      let damage = this.getDamage(distance);
      enemy.takeAttack(damage);
    }
    
    this.checkWeapon(); // Проверка оружия
  }

  chooseEnemy(players) {
    let enemy = null;
    let minLife = Infinity;

    for (let p of players) {
      if (p !== this && !p.isDead()) {
        if (p.life < minLife) {
          minLife = p.life;
          enemy = p;
        }
      }
    }
    return enemy;
  }

  moveToEnemy(enemy) {
    if (!enemy) return;
    this.move(enemy.position - this.position);
  }

  turn(players) {
    const enemy = this.chooseEnemy(players);
    if (enemy) {
      this.moveToEnemy(enemy);
      this.tryAttack(enemy);
    }
  }
}