import Player from '../src/js/Player.js';
import Warrior from '../src/js/Warrior.js';
import Archer from '../src/js/Archer.js';
import Mage from '../src/js/Mage.js';

test('Player should move correctly', () => {
  const p = new Player(5, 'Тест');
  p.moveLeft(5);
  expect(p.position).toBe(4);
  p.moveRight(10);
  expect(p.position).toBe(5);
  p.move(-1);
  expect(p.position).toBe(4); 
});

test('Archer should have 80 life', () => {
  const archer = new Archer(1, 'Леголас');
  expect(archer.life).toBe(80);
});

test('Mage should reduce damage if magic > 50', () => {
  const mage = new Mage(1, 'Гендальф');
  mage.takeDamage(20); 
  expect(mage.life).toBe(60);
  expect(mage.magic).toBe(88);
});

test('Warrior should take damage to magic if life < 50 and luck > 0.8', () => {
  const warrior = new Warrior(1, 'Алёша Попович');
  warrior.life = 40;
  warrior.luck = 100;
  warrior.takeDamage(10);
  expect(warrior.magic).toBe(10);
  expect(warrior.life).toBe(40);
});

test('Player tryAttack and chooseEnemy logic', () => {
  const p1 = new Player(0, 'Атакующий');
  const p2 = new Player(1, 'Враг');
  
  const enemy = p1.chooseEnemy([p1, p2]);
  expect(enemy.name).toBe('Враг');

  p1.luck = 100;
  p2.luck = 0;
  p2.agility = 0; // Чтобы не уклонился
  p2.speed = 0;   // Чтобы не уклонился
  
  p1.tryAttack(p2);
  expect(p2.life).toBeLessThan(100);
});

test('Player advanced battle logic (dodge, point-blank, break weapon)', () => {
  const p1 = new Player(0, 'Герой');
  const p2 = new Player(0, 'Враг');

  p1.luck = 100;
  p1.tryAttack(p2);
  expect(p2.position).toBe(1);

  p2.life = 100;
  p2.luck = 100;
  p2.agility = 100;
  p2.takeAttack(50);
  expect(p2.life).toBe(100);

  p1.weapon.takeDamage(1000000);
  p1.checkWeapon();
  expect(p1.weapon.name).toBe('Рука');
});