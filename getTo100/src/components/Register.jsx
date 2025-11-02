import { useState } from "react";
import GameBoard from "./GameBoard";
import DisplayGameBoards from "./DiaplayGameBoards";

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
      <DisplayGameBoards playersArr={names} gameRunning={gameRunning} />
    </>
  );
}
export default Register;
