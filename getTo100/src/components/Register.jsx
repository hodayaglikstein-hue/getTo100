import { useState } from "react";
import DisplayGameBoards from "./DisplayGameBoards";

function Register() {
  const [names, setNames] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);

  let playerName;

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
  }

  const getNameValue = (event) => {
    event.preventDefault();
    playerName = event.target.elements.username.value;
    addPlayer(playerName);
    event.target.elements.username.value = "";
  };

  return (
    <>
      <form onSubmit={getNameValue}>
        <input name="username" type="text" placeholder="הכנס שם: " />
        <button type="submit">כניסה</button>
      </form>
      <button
        onClick={() => {
          setGameRunning(true);
        }}
      >
        התחל משחק
      </button>
      <DisplayGameBoards
        playersArr={names}
        gameRunning={gameRunning}
        removePlayer={removePlayer}
      />
    </>
  );
}
export default Register;
