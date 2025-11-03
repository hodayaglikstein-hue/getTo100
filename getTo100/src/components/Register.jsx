function Register(props) {
  let playerName;

  const getNameValue = (event) => {
    event.preventDefault();
    playerName = event.target.elements.username.value;
    props.addPlayer(playerName);
    event.target.elements.username.value = "";
  };

  return (
    <>
      <nav>
        <form onSubmit={getNameValue}>
          <input name="username" type="text" placeholder="הכנס שם: " required />
          <br />
          <button type="submit">הוסף שחקן</button>
        </form>
        <button
          onClick={() => {
            props.setGameRunning(true);
          }}
          disabled={props.gameRunning}
        >
          התחל משחק
        </button>
      </nav>
    </>
  );
}
export default Register;
