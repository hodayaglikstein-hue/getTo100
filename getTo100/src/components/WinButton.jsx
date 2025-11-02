function WinButtons(props) {
  return (
    <>
      <button
        onClick={() => {
          props.randomNum();
          props.setWinner(false);
        }}
      >
        שחק שוב
      </button>
      <button
        onClick={() => {
          props.removePlayer(props.index);
          props.resetCurrentPlayerIndex();
        }}
      >
        צא מהמשחק
      </button>
    </>
  );
}

export default WinButtons;
