import { useState } from "react";
import GameBoard from "./GameBoard";

function Register() {
  const [names, setNames] = useState([]);
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

      {names.map((name, index) => {
        return <GameBoard playerName={name} key={index} />;
      })}
    </>
  );
}
export default Register;
