export default function play(players) {
  while (players.filter(p => !p.isDead()).length > 1) {
    players.forEach(player => {
      if (!player.isDead()) {
        player.turn(players);
      }
    });
  }

  const winner = players.find(p => !p.isDead());
  if (winner) {
    console.log(`Победил ${winner.name} (${winner.description})! Остаток жизней: ${winner.life.toFixed(1)}`);
    return winner;
  }
  
  return null;
}