import { useState } from "react";
import GameButtons from "./GameButtons";
import WinButtons from "./WinButton";

function GameBoard(props) {
  const [num, setNum] = useState(Math.floor(Math.random() * 10));
  const [isPlaying, setIsPlaying] = useState(false);
  const [countActions, setCountAction] = useState(0);

  function randomNum() {
    let number = Math.floor(Math.random() * 10);
    console.log(number);
    setNum(number);
  }

  function addToCountActions() {
    let prev = countActions;
    prev++;
    setCountAction(prev);
  }

  function nextPlayer() {
    addToCountActions();
    props.changeIndex();
    setIsPlaying(false);
  }

  if (props.index === props.currentPlayerIndex && !isPlaying) {
    setIsPlaying(true);
  }

  if (num === 10 && isPlaying) {
    setIsPlaying(false);
    setNum(0);
    let arr = JSON.parse(localStorage.getItem(props.playerName));
    arr.push(countActions);
    localStorage.setItem(props.playerName, JSON.stringify(arr));
    setCountAction(0);
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
        <div id="WinButtons">
          <WinButtons
            randomNum={randomNum}
            removePlayer={props.removePlayer}
            index={props.index}
          />
        </div>
      </div>
    </>
  );
}
export default GameBoard;
