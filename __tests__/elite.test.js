import Dwarf from '../src/js/Dwarf.js';
import Crossbowman from '../src/js/Crossbowman.js';
import Demiurge from '../src/js/Demiurge.js';

test('Dwarf should have 130 life', () => {
  const dwarf = new Dwarf(1, 'Гимли');
  expect(dwarf.life).toBe(130);
  expect(dwarf.weapon.name).toBe('Секира');
});

test('Crossbowman should have 85 life', () => {
  const cb = new Crossbowman(1, 'Леголас');
  expect(cb.life).toBe(85);
});

test('Demiurge should have 120 magic', () => {
  const demiurge = new Demiurge(1, 'Маг');
  expect(demiurge.magic).toBe(120);
});