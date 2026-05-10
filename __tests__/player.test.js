import Player from '../src/js/Player.js';

test('Player should take damage', () => {
  const player = new Player(0, 'Тест');
  player.takeDamage(50);
  expect(player.life).toBe(50);
  player.takeDamage(60);
  expect(player.life).toBe(0);
  expect(player.isDead()).toBe(true);
});