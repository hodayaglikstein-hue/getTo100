import { useState } from "react";
import GameButtons from "./GameButtons";

function GameBoard(props) {
  const [num, setNum] = useState(0);
  return (
    <>
      <div id={props.playerName}>
        <h3>{props.playerName}</h3>
        <div id="number">{num}</div>
        <div id="buttons">
          <GameButtons setNum={setNum} num={num} />
        </div>
      </div>
    </>
  );
}
export default GameBoard;
