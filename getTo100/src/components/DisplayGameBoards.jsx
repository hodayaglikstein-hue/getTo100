import { useState } from "react";
import GameBoard from "./GameBoard";

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

  return (
    <>
      {props.playersArr.map((name, index) => {
        return (
          <GameBoard
            playerName={name}
            key={index}
            index={index}
            gameRunning={props.gameRunning}
            currentPlayerIndex={currentPlayerIndex}
            changeIndex={changeIndex}
            removePlayer={props.removePlayer}
          />
        );
      })}
    </>
  );
}

export default DisplayGameBoards;
