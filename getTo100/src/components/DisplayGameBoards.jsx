import { useState } from "react";
import GameBoard from "./GameBoard";
import "../App.css";

function DisplayGameBoards(props) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  function changeIndex() {
    let prev = currentPlayerIndex;
    if (currentPlayerIndex < props.playersArr.length - 1) {
      prev++;
      setCurrentPlayerIndex(prev);
    } else {
      setCurrentPlayerIndex(0);
    }
  }

  function resetCurrentPlayerIndex() {
    if (props.playersArr.length === 1) {
      setCurrentPlayerIndex(0);
    }
  }

  return (
    <>
      <div id="container">
        {props.playersArr.map((name, index) => {
          return (
            <GameBoard
              playerName={name}
              key={name}
              index={index}
              gameRunning={props.gameRunning}
              currentPlayerIndex={currentPlayerIndex}
              changeIndex={changeIndex}
              removePlayer={props.removePlayer}
              resetCurrentPlayerIndex={resetCurrentPlayerIndex}
            />
          );
        })}
      </div>
    </>
  );
}

export default DisplayGameBoards;
