import Sword from '../src/js/Sword.js';
import Bow from '../src/js/Bow.js';
import Arm from '../src/js/Arm.js';

test('Sword should have 500 durability', () => {
  const s = new Sword();
  expect(s.durability).toBe(500);
});

test('Bow should have 200 durability', () => {
  const b = new Bow();
  expect(b.durability).toBe(200);
});

test('Arm should have Infinity durability', () => {
  const a = new Arm();
  a.takeDamage(100);
  expect(a.durability).toBe(Infinity);
});