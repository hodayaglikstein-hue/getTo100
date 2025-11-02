import { useState } from "react";
import GameButtons from "./GameButtons";

function GameBoard(props) {
  const [num, setNum] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (props.index === props.currentPlayerIndex && !isPlaying) {
    setIsPlaying(true);
  }

  function nextPlayer() {
    props.changeIndex();
    setIsPlaying(false);
  }

  return (
    <>
      <div id={props.playerName}>
        <h3>{props.playerName}</h3>
        <div id="number">{num}</div>
        <div id="buttons">
          <GameButtons
            setNum={setNum}
            num={num}
            gameRunning={props.gameRunning}
            isPlaying={isPlaying}
            nextPlayer={nextPlayer}
          />
        </div>
      </div>
    </>
  );
}
export default GameBoard;
