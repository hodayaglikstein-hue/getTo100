function WinButtons(props) {
  return (
    <>
      <button
        onClick={() => {
          props.randomNum();
        }}
      >
        שחק שוב
      </button>
      <button
        onClick={() => {
          props.removePlayer(props.index);
        }}
      >
        צא מהמשחק
      </button>
    </>
  );
}

export default WinButtons;
