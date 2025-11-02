import { useState } from "react";
import GameButtons from "./GameButtons";

function GameBoard(props) {
  const [num, setNum] = useState(0);
  return (
    <>
      <div id={props.playerName}>
        <div id="number">{num}</div>
        <div id="buttons">
          <GameButtons setNum={setNum} num={num} />
        </div>
      </div>
    </>
  );
}
export default GameBoard;
