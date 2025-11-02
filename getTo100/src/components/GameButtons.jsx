function GameButtons(props) {
  function updateNum(action) {
    console.log(props.num);
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
        onClick={() => {
          updateNum("add");
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          updateNum("substract");
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          updateNum("multiply");
        }}
      >
        *2
      </button>
      <button
        onClick={() => {
          updateNum("divide");
        }}
      >
        /2
      </button>
      <button
        onClick={() => {
          updateNum("power");
        }}
      >
        ^2
      </button>
    </>
  );
}

export default GameButtons;
