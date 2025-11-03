import "./App.css";
import Register from "./components/Register";
import Leaderboard from "./components/Leaderboard";
import { useState } from "react";
import DisplayGameBoards from "./components/DisplayGameBoards";

function App() {
  const [names, setNames] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);

  function addPlayer(playerName) {
    if (localStorage.getItem(playerName) === null) {
      localStorage.setItem(playerName, JSON.stringify([]));
    }
    setNames((prev) => [...prev, playerName]);
  }

  function removePlayer(index) {
    let copyArr = [...names];
    copyArr.splice(index, 1);
    setNames(copyArr);
    if (copyArr.length === 0) {
      setGameRunning(false);
    }
  }

  return (
    <>
      <Register
        names={names}
        setNames={setNames}
        gameRunning={gameRunning}
        setGameRunning={setGameRunning}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
      <DisplayGameBoards
        playersArr={names}
        gameRunning={gameRunning}
        removePlayer={removePlayer}
      />
      <Leaderboard />
    </>
  );
}

export default App;
