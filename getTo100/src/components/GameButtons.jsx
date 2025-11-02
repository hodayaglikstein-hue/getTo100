function GameButtons(props) {
  function updateNum(action) {
    let prevNum = props.num;
    switch (action) {
      case "add":
        prevNum++;
        break;
      case "substract":
        if (prevNum !== 0) {
          prevNum--;
        }
        break;
      case "multiply":
        prevNum = prevNum * 2;
        break;
      case "divide":
        if (prevNum > 1) {
          prevNum = Math.floor(prevNum / 2);
        }
        break;
      default:
        prevNum = prevNum ** 2;
    }
    props.setNum(prevNum);
  }
  return (
    <>
      <button
        disabled={!props.gameRunning || !props.isPlaying}
        onClick={() => {
          updateNum("add");
          props.nextPlayer();
        }}
      >
        +1
      </button>
      <button
        disabled={!props.gameRunning || !props.isPlaying}
        onClick={() => {
          updateNum("substract");
          props.nextPlayer();
        }}
      >
        -1
      </button>
      <button
        disabled={!props.gameRunning || !props.isPlaying}
        onClick={() => {
          updateNum("multiply");
          props.nextPlayer();
        }}
      >
        *2
      </button>
      <button
        disabled={!props.gameRunning || !props.isPlaying}
        onClick={() => {
          updateNum("divide");
          props.nextPlayer();
        }}
      >
        /2
      </button>
      <button
        disabled={!props.gameRunning || !props.isPlaying}
        onClick={() => {
          updateNum("power");
          props.nextPlayer();
        }}
      >
        ^2
      </button>
    </>
  );
}

export default GameButtons;
