import Archer from '../src/js/Archer.js';
import Mage from '../src/js/Mage.js';
import Warrior from '../src/js/Warrior.js';

test('Archer should have 80 life', () => {
  const archer = new Archer(1, 'Леголас');
  expect(archer.life).toBe(80);
});

test('Mage should reduce damage if magic > 50', () => {
  const mage = new Mage(1, 'Гендальф');
  mage.takeDamage(20); 
  expect(mage.life).toBe(60);
  expect(mage.magic).toBe(88); // 100 - 12
});

test('Warrior should take damage to magic if life < 50 and luck > 0.8', () => {
  const warrior = new Warrior(1, 'Алёша Попович');
  warrior.life = 40;
  warrior.luck = 100; 
  warrior.takeDamage(10);
  expect(warrior.magic).toBe(10);
  expect(warrior.life).toBe(40);
});