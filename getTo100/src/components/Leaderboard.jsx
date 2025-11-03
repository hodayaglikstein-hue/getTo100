function Leaderboard() {
  function findTopThree() {
    let playersValuesArray = Object.values(localStorage);
    let playersNamesArray = Object.keys(localStorage);
    let averages = createAverageArray(playersValuesArray);
    let players = playersNamesArray.map((name, i) => ({
      name: name,
      score: averages[i],
    }));
    players = players.filter((player) => player.score > 0);
    players.sort((a, b) => a.score - b.score);

    return players.slice(0, 3);
  }

  function createAverageArray(playersValuesArray) {
    return playersValuesArray.map((player) => {
      let arr = JSON.parse(player);
      if (arr.length === 0) return 0;
      let total = arr.reduce((sum, value) => sum + value, 0);
      return Math.floor(total / arr.length);
    });
  }

  const topThree = findTopThree();

  return (
    <div id="leaderboard">
      <h3>לוח מובילים</h3>
      {topThree.map((player, index) => (
        <h4 key={index}>
          {player.name}: {player.score}
        </h4>
      ))}
    </div>
  );
}

export default Leaderboard;
