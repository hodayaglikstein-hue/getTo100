import { useState } from "react";
import GameButtons from "./GameButtons";
import WinButtons from "./WinButton";
import "../App.css";

function GameBoard(props) {
  const [num, setNum] = useState(Math.floor(Math.random() * 10));
  const [isPlaying, setIsPlaying] = useState(false);
  const [countActions, setCountAction] = useState(0);
  const [winner, setWinner] = useState(false);

  function randomNum() {
    let number = Math.floor(Math.random() * 10);
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

  //check victory
  if (num === 10 && isPlaying) {
    setIsPlaying(false);
    setNum(" ");
    let arr = JSON.parse(localStorage.getItem(props.playerName));
    arr.push(countActions);
    localStorage.setItem(props.playerName, JSON.stringify(arr));
    setCountAction(0);
    setWinner(true);
  }

  return (
    <>
      <div className="boards" id={isPlaying && props.gameRunning && "border"}>
        <h3>{props.playerName}</h3>
        {props.gameRunning && (
          <div id="number">{winner ? "🎉 הצלחת" : num}</div>
        )}
        <div id="buttons">
          {!winner && (
            <GameButtons
              setNum={setNum}
              num={num}
              gameRunning={props.gameRunning}
              isPlaying={isPlaying}
              nextPlayer={nextPlayer}
            />
          )}
        </div>
        <div id="WinButtons">
          {winner && (
            <WinButtons
              randomNum={randomNum}
              index={props.index}
              setWinner={setWinner}
              resetCurrentPlayerIndex={props.resetCurrentPlayerIndex}
              removePlayer={props.removePlayer}
            />
          )}
        </div>
        <h4>
          {JSON.parse(localStorage.getItem(props.playerName)).length > 0 &&
            "התוצאות שלך הן:"}
        </h4>
        {JSON.parse(localStorage.getItem(props.playerName)).map((count) => {
          return count + ", ";
        })}
      </div>
    </>
  );
}
export default GameBoard;
